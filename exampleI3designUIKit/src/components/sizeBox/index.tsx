import React from 'react';
import { View } from 'react-native';

interface SizeBoxProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
}

export default function SizeBox({ children, width, height }: SizeBoxProps) {
  return <View style={{ width, height }}>{children}</View>;
}
