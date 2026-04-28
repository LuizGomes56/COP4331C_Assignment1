// std::process::Child::spawn;
// creates cmd new process
const { spawn } = require("child_process");

let server;

// use port 8000 for server
beforeAll((done) => {
    server = spawn("php", ["-S", "127.0.0.1:8000", "-t", "."], {
        stdio: "ignore",
    });

    // await 1 second to ensure it started
    setTimeout(done, 1000);
});

afterAll(() => {
    if (server) {
        server.kill();
    }
});

describe("Health API integration test", () => {
    test("returns a valid JSON response", async () => {
        // check api health endpoint
        const response = await fetch("http://127.0.0.1:8000/api/Health.php");
        const json = await response.json();

        expect(response.status).toBe(200);
        expect(json).toHaveProperty("status", "ok");
        expect(json).toHaveProperty("service", "COP4331C_Assignment1");
    });
});