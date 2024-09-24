module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Use 'node' if you're testing Node.js applications
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/?(*.)+(spec|test).ts'], // Pattern for test files
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json', // Specify the path to your tsconfig.json
      },
    ],
  },
  coverageDirectory: 'coverage', // Output coverage reports to a directory named 'coverage'
  collectCoverageFrom: ['src/**/*.ts'], // Collect coverage information from .ts files in src folder
};
