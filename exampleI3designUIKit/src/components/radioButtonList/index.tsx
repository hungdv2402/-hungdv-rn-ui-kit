import React from 'react';
import { FlatList, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import ListItem from './ListItem';

type I3RadioButtonListProps = {
  data: {
    label: string;
    id: string;
  }[];
  value: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  onSelect: (value: string) => void;
};

const I3RadioButtonList = ({
  data,
  value,
  containerStyle,
  labelStyle,
  itemStyle,
  onSelect,
}: I3RadioButtonListProps) => {
  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      style={[styles.container, containerStyle]}
      keyExtractor={(item) => item.label}
      renderItem={({ item }) => (
        <ListItem
          labelStyle={labelStyle}
          itemStyle={itemStyle}
          label={item.label}
          isSelected={value === item.id}
          onSelect={() => onSelect(item.id)}
        />
      )}
    />
  );
};

export default I3RadioButtonList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexGrow: 0,
  },
});
