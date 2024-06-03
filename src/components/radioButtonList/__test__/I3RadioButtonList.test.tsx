import renderer from 'react-test-renderer';
import I3RadioButtonList from '../I3RadioButtonList';
import React from 'react';
import { View } from 'react-native';
import SizeBox from '../../sizeBox';
import {render, fireEvent} from '@testing-library/react-native'

describe('renders I3RadioButtonList correctly', () => {
  it('should render I3RadioButtonList with basic properties', () => {
    const tree = renderer
      .create(
        <I3RadioButtonList
          data={[]}
          value={''}
          onSelect={jest.fn()}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render I3RadioButtonList with custom properties and sample data', () => {
    const tree = renderer
      .create(
        <View>
          <I3RadioButtonList
            containerStyle={{ backgroundColor: 'red' }}
            labelStyle={{ fontSize: 20 }}
            itemStyle={{ padding: 20 }}
            data={[{ label: 'Option 1', id: '1' }, { label: 'Option 2', id: '2' }]}
            value={'1'}
            onSelect={jest.fn()}
          />
          <SizeBox height={10} />
        </View>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should select correct a radio button in I3RadioButtonList', async () => {
    let value = '1'
    const onSelect = jest.fn((res: string) => {value = res});
    const radioButtonList = render(
      <I3RadioButtonList
      containerStyle={{ backgroundColor: 'red' }}
      labelStyle={{ fontSize: 20 }}
      itemStyle={{ padding: 20 }}
      data={[{ label: 'Option 1', id: '1' }, { label: 'Option 2', id: '2' }]}
      value={value}
      onSelect={onSelect}
    />)
    const radioButton1 = await radioButtonList.findByTestId('radio-button-2');
    fireEvent.press(radioButton1);
    expect(value).toBe('2');
    expect(onSelect).toHaveBeenCalled();
  });
});