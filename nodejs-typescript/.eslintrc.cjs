module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        // 👇"plugin:@typescript-eslint/recommended", 
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked"
    ],
    "ignorePatterns": ["dist", ".eslintrc.cjs"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        // 👇
        "project": "./tsconfig.json",
        "requireConfigFile": false,
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // 👇 Add rules - Reference: https://eslint.org/docs/latest/rules/

        "no-console": 1,
        "no-extra-boolean-cast": 0,
        "no-lonely-if": 1,
        "no-unused-vars": 1,
        "no-trailing-spaces": 1,
        "no-multi-spaces": 1,
        "no-multiple-empty-lines": 1,
        "space-before-blocks": ["error", "always"],
        "object-curly-spacing": [1, "always"],
        "indent": ["warn", 2],
        "semi": [0, "never"],
        "quotes": ["error", "double"],
        "array-bracket-spacing": 1,
        "linebreak-style": 0,
        "no-unexpected-multiline": "warn",
        "keyword-spacing": 1,
        "comma-dangle": 1,
        "comma-spacing": 1,
        "arrow-spacing": 1
    }
}
