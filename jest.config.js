module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    'src/{components,utils,hooks,domain}/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
};
