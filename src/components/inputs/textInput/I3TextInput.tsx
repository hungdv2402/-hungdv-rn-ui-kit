import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface I3TextInput extends TextInputProps {
  label?: string;
}

function I3TextInput(props: I3TextInput) {
  const { label } = props;
  const [isFocused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.textFieldLabel}>{label}</Text>}
      <TextInput
        {...props}
        style={[styles.inputContainer, isFocused && { borderColor: '#16AB89', borderWidth: 2 }]}
        placeholderTextColor={'#B8B9BA'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
}

export default I3TextInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  textFieldLabel: {
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 8,
  },
  inputContainer: {
    fontSize: 14,
    fontWeight: '400',
    borderColor: '#D3D3D4',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    minHeight: 53,
    paddingHorizontal: 16,
  },
});
