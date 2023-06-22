module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|redux-persist-sensitive-storage)',
    'node_modules/(?!(jest-)?react-native-permissions|)',
  ],
  transform: {
    '.+\\.(svg)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\./svg': './__mocks__/svgMock.js',
  },
  setupFiles: ['./jest/setup.ts'],
  setupFilesAfterEnv: ['./jest/jestAfterEnvSetup.js'],
};
