import renderer from 'react-test-renderer';
import I3Button from '../I3Button';
import React from 'react';
import { Image } from 'react-native';

const customIcon = require('../assets/close.png');

describe('renders I3Button correctly', () => {
  it('I3button with primaryType', () => {
    const tree = renderer
      .create(
        <I3Button
          label="Submit"
          onPress={jest.fn()}
          disabled={false}
          primaryType
          textStyle={{ color: 'blue' }}
          buttonStyle={{ borderColor: 'blue', backgroundColor: 'orange' }}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('I3button with secondaryType and Icon', () => {
    const tree = renderer
      .create(
        <I3Button
          label="Submit"
          icon={<Image source={customIcon} />}
          onPress={jest.fn()}
          disabled={false}
          secondaryType
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('I3button with thirdType and disabled', () => {
    const tree = renderer
      .create(
        <I3Button
          label="Submit"
          onPress={jest.fn()}
          disabled
          thirdType
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});