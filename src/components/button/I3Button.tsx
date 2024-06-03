import React from 'react';
import { Text, StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import SizeBox from '../sizeBox';

export interface I3ButtonProps {
  icon?: React.ReactNode;
  disabled?: boolean;
  label?: string;
  primaryType?: boolean;
  secondaryType?: boolean;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  thirdType?: boolean;
  onPress(): void;
}

function I3Button(props: I3ButtonProps) {
  const {
    icon,
    disabled,
    label,
    primaryType = true,
    secondaryType,
    thirdType,
    buttonStyle,
    textStyle,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        primaryType && styles.primary,
        secondaryType && { backgroundColor: '#fff' },
        thirdType && { backgroundColor: '#fff', borderColor: '#F0F0F0' },
        disabled && {
          backgroundColor: '#EBEBEB',
          borderColor: '#EBEBEB',
        },
        buttonStyle,
      ]}
    >
      <View style={styles.titleWrapper}>
        {icon && (
          <>
            {icon}
            <SizeBox width={8} />
          </>
        )}
        <Text
          style={[
            primaryType && styles.textPrimary,
            secondaryType && { color: '#16AB89' },
            thirdType && { color: '#606163' },
            disabled && { color: '#919192' },
            textStyle,
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default I3Button;

const styles = StyleSheet.create({
  primary: {
    borderRadius: 28,
    backgroundColor: '#16AB89',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 56,
    borderColor: '#16AB89',
    borderWidth: 2,
  },
  textPrimary: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
