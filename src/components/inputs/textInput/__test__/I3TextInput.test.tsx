import renderer from 'react-test-renderer';
import I3TextInput from '../I3TextInput';
import React from 'react';

describe('renders I3TextInput correctly', () => {
  it('should render I3TextInput with label="Email"', () => {
    const tree = renderer
      .create(
        <I3TextInput onFocus={jest.fn()} label='Email' />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});