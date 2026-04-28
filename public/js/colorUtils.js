function formatColorName(value) {
    return String(value || "").trim().toLowerCase();
}

function isValidColorName(value) {
    const color = String(value || "").trim();

    if (color.length < 2) {
        return false;
    }

    if (color.length > 30) {
        return false;
    }

    return /^[a-zA-Z\s]+$/.test(color);
}

if (typeof module !== "undefined") {
    module.exports = {
        formatColorName,
        isValidColorName,
    };
}