module.exports = {
    env: {
        mocha: true,
    },
    plugins: [
        'mocha',
    ],
    rules: {
        'mocha/handle-done-callback': [
            'error',
        ],
        'mocha/max-top-level-suites': [
            'error',
            {
                limit: 1,
            },
        ],
        'mocha/no-async-describe': [
            'error',
        ],
        'mocha/no-exclusive-tests': [
            'error',
        ],
        'mocha/no-global-tests': [
            'error',
        ],
        'mocha/no-hooks': [
            'error',
        ],
        'mocha/no-hooks-for-single-case': [
            'error',
        ],
        'mocha/no-identical-title': [
            'error',
        ],
        'mocha/no-mocha-arrows': [
            'off',
        ],
        'mocha/no-nested-tests': [
            'error',
        ],
        'mocha/no-pending-tests': [
            'error',
        ],
        'mocha/no-return-and-callback': [
            'error',
        ],
        'mocha/no-return-from-async': [
            'error',
        ],
        'mocha/no-setup-in-describe': [
            'error',
        ],
        'mocha/no-sibling-hooks': [
            'error',
        ],
        'mocha/no-skipped-tests': [
            'error',
        ],
        'mocha/no-synchronous-tests': [
            'error',
        ],
        'mocha/no-top-level-hooks': [
            'error',
        ],
        'mocha/prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: false,
            },
        ],
        'mocha/valid-suite-description': [
            'off',
        ],
        'mocha/valid-test-description': [
            'off',
        ],
    },
};
