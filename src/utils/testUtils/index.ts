export const navigation = {
  reset: jest.fn(),
  navigate: jest.fn(),
  goBack: jest.fn(),
  addListener: jest.fn(),
  isFocused: jest.fn(),
  setParams: jest.fn(),
  dispatch: jest.fn(),
  push: jest.fn(),
  setOptions: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn(),
  canGoBack: jest.fn(),
  getParent: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(),
};

export function generateCustomNavigation(
  navigateCallback: jest.Mock<any, any, any>,
  resetCallback?: jest.Mock<any, any, any>,
) {
  const navigationMock = {
    reset: jest.fn(),
    navigate: jest.fn(),
    goBack: jest.fn(),
    addListener: jest.fn(),
    isFocused: jest.fn(),
    setParams: jest.fn(),
    dispatch: jest.fn(),
    push: jest.fn(),
    setOptions: jest.fn(),
    getId: jest.fn(),
    getState: jest.fn(),
    canGoBack: jest.fn(),
    getParent: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    removeListener: jest.fn(),
    replace: jest.fn(),
  };

  navigationMock.navigate = navigateCallback;
  if (resetCallback) navigationMock.reset = resetCallback;
  return navigationMock;
}
