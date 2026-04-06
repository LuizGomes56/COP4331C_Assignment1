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
            "no-undef": "error",
            "no-console": "off",
            "no-unused-vars": "off",
            "no-unused-vars": [
                "error",
                {
                    "args": "all",
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_"
                }
            ]
        },
    },
    {
        ignores: [
            "node_modules/**",
            ".git/**",
        ],
    },
];