module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/src/', '/lib/'],
    preset: 'ts-jest/presets/js-with-ts',
    runner: 'jest-electron/runner',
    testEnvironment: 'jest-electron/environment',
    setupFilesAfterEnv: [
        'jest-extended/all',
    ],
    transform: {
        '\\.worker.ts$': '<rootDir>/lib/jest-transform',
    },
    moduleNameMapper: {
        '^@pixi/webworker-plugins$': '<rootDir>/src',
    },
    testMatch: ['**/*.tests.ts'],
    globals: {
        'ts-jest': {
            tsconfig: {
                module: 'ESNext',
                esModuleInterop: true,
            },
            diagnostics: false,
        },
    },
};
