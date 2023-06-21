import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-splash-screen', () => {
  return {
    show: jest.fn(),
    hide: jest.fn(),
    // you can add other functions mock here that you are using
  };
});
