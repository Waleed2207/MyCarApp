/**
 * @format
 */

import 'react-native';
import {track} from '../src/analyticsUtils';
import {addNumbers} from '../src/mathUtils';
// Note: test renderer must be required after react-native.

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

jest.mock('../src/analyticsUtils.js');
// track.mockReturnValue(4);

test('add numbers', () => {
  expect(addNumbers(1, 2)).toEqual(3);
  expect(track).toBeCalledWith('addNumbers');
});
