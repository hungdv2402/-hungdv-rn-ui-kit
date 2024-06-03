import React, { useMemo, useRef, ReactNode } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type I3PinCodeProps = {
  isError?: boolean;
  quantity?: number;
  value: string;
  setValue(value: string): void;
  onComplete?(): void;
  setError?(isError: boolean): void;
};

const I3PinCode = ({
  isError,
  value,
  quantity = 4,
  setValue,
  onComplete,
  setError,
}: I3PinCodeProps) => {
  const inputRef = useRef<TextInput>(null);

  const renderSquares = useMemo(() => {
    const squares: ReactNode[] = [];
    const valueArray = value ? value.split('') : [];
    for (let index = 0; index < quantity; index++) {
      squares.push(
        <View
          key={index.toString()}
          style={[styles.square, isError && { borderWidth: 2, borderColor: 'red' }]}
        >
          <Text style={styles.squareText}>{valueArray[index] || ''}</Text>
        </View>
      );
    }
    return squares;
  }, [value]);

  const onChangeText = (value: string) => {
    if (value.length <= quantity) {
      setError && setError(false);
      setValue(value);
      if (value.length === quantity) {
        Keyboard.dismiss();
        onComplete && onComplete();
      }
    }
  };

  const onFocus = () => {
    inputRef.current?.focus();
    if (isError) {
      inputRef.current?.setSelection(0, quantity);
    }
  };

  return (
    <Pressable onPress={onFocus} style={styles.container}>
      {renderSquares}

      <TextInput
        value={value}
        keyboardType="numeric"
        onChangeText={onChangeText}
        caretHidden
        ref={inputRef}
        style={{ display: 'none' }}
      />
    </Pressable>
  );
};

export default I3PinCode;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  square: {
    height: 60,
    width: 50,
    borderWidth: 1,
    borderColor: '#D3D3D4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  squareText: {
    color: '#212127',
    fontSize: 20,
    fontWeight: '600',
  },
});
