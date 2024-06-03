import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import SizeBox from '../sizeBox';

const radioButton = require('./assets/radioButton.png');
const selectedRadioButton = require('./assets/selectedRadioButton.png');

type ListItemProps = {
  testID?: string;
  isSelected: boolean;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  onSelect?: () => void;
};

const ListItem = (props: ListItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity testID={props.testID} style={[styles.itemContainer, props.itemStyle]} onPress={props.onSelect}>
        <Image
          style={{ width: 24, height: 24 }}
          source={props.isSelected ? selectedRadioButton : radioButton}
        />
        <SizeBox width={8} />
        <Text style={[styles.text, props.labelStyle]}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  text: {
    fontSize: 17,
    color: '#212127',
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    opacity: 0.05,
  },
});
