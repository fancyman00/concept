module.exports = {
    parser: "@typescript-eslint/parser",
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'prettier', "@feature-sliced"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {},
};
