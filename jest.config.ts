export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/protocols/*.ts',
    '!<rootDir>/src/**/*protocols.ts',
    '!<rootDir>/src/**/models/*.ts',
    '!<rootDir>/src/**/usecases/*.ts',
    '!<rootDir>/src/**/index.ts'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
