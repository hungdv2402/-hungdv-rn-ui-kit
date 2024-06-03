import renderer from 'react-test-renderer';
import I3PinCode from '../I3PinCode';
import React from 'react';

describe('renders I3PinCode correctly', () => {
  it('should render I3PinCode with basic properties', () => {
    const tree = renderer
      .create(
        <I3PinCode
          value={'8888'}
          setValue={jest.fn()}
          onComplete={jest.fn()}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render I3PinCode with custom errors', () => {
    const tree = renderer
      .create(
        <I3PinCode
          value={''}
          setValue={jest.fn()}
          isError={true}
          setError={jest.fn()}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render I3PinCode with custom quantity', () => {
    const tree = renderer
      .create(
        <I3PinCode
          value={'888888'}
          setValue={jest.fn()}
          quantity={6}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});