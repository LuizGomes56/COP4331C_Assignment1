const { formatColorName, isValidColorName } = require("../../public/js/colorUtils");

// note: tests are not really meaningful for this app
describe("color front-end helpers", () => {
    test("formats a color name by trimming and lowercasing it", () => {
        expect(formatColorName("  Blue  ")).toBe("blue");
    });

    test("accepts a valid color name", () => {
        expect(isValidColorName("Light Blue")).toBe(true);
    });

    test("rejects an empty color name", () => {
        expect(isValidColorName("")).toBe(false);
    });

    test("rejects color names with numbers", () => {
        expect(isValidColorName("Blue123")).toBe(false);
    });
});