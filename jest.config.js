module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/packages'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  collectCoverageFrom: [
    'packages/**/*.ts',
    '!packages/**/*.d.ts',
    '!packages/**/__tests__/**'
  ],
  moduleNameMapper: {
    '^@relative-time/core$': '<rootDir>/packages/core/src'
  }
};
