import renderer from 'react-test-renderer';
import I3Card from '../I3Card';
import React from 'react';
import { Text } from 'react-native';

describe('renders I3Card correctly', () => {
  it('should render I3Card with padding={16} round={8} color="lightpink"', () => {
    const tree = renderer
      .create(
        <I3Card
          padding={16}
          round={8}
          color="lightpink"
        >
          <Text>should render I3Card with padding={16} round={8} color="lightpink"</Text>
        </I3Card>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render I3Card with custom style', () => {
    const tree = renderer
      .create(
        <I3Card style={{ marginHorizontal: 16 }} >
          <Text>should render I3Card with custom style</Text>
        </I3Card>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});