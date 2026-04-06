const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    js.configs.recommended,
    {
        files: ["public/**/*.js", "**/*.js"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "script",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            "no-console": "off",
        },
    },
    {
        ignores: [
            "node_modules/**",
            ".git/**",
        ],
    },
];