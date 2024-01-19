/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock('../App');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');
it('renders correctly', () => {
  renderer.create(<App />);
});
