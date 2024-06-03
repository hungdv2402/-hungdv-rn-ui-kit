import renderer from 'react-test-renderer';
import I3AlertModal from '../I3AlertModal';
import React from 'react';

jest.mock('react-native-modal', () => 'Modal');

describe('renders I3AlertModal correctly', () => {
  it('should render I3AlertModal with basic properties', () => {
    const tree = renderer
      .create(
        <I3AlertModal
          visible={false}
          onCancel={jest.fn()}
          onSubmit={jest.fn()}
          title={'title'}
          subTitle={'subTitle'}
          negativeText={'negativeText'}
          positiveText={'positiveText'}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});