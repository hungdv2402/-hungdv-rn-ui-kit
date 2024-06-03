import renderer from 'react-test-renderer';
import I3BottomSheet from '../I3BottomSheet';
import React from 'react';
import { Text } from 'react-native';

jest.mock('react-native-modal', () => 'Modal');

describe('renders I3BottomSheet correctly', () => {
  it('should render I3BottomSheet with basic properties', () => {
    const tree = renderer
      .create(
        <I3BottomSheet
          title='Modal Title'
          visible={true}
          closeModal={jest.fn()}
        >
          <Text>should render I3BottomSheet with basic properties</Text>
        </I3BottomSheet>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render I3BottomSheet with useSwipeDown={true} and title="Modal Title"', () => {
    const tree = renderer
      .create(
        <I3BottomSheet
          title='Modal Title'
          useSwipeDown
          visible={true}
          closeModal={jest.fn()}
        >
          <Text>should render I3BottomSheet with useSwipeDown={true}</Text>
        </I3BottomSheet>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});