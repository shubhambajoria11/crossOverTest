/**
 * @format
 */

import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

describe('App', () => {
  it('should render', () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  });

  it('should change on state change of App', async () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });
});
