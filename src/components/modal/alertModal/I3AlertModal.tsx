import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import SizeBox from '../../sizeBox';

interface I3AlertModalProps {
  title?: string;
  visible: boolean;
  subTitle?: string;
  negativeText?: string;
  positiveText?: string;
  onCancel(): void;
  onSubmit(): void;
}

const I3AlertModal = ({
  title,
  visible,
  subTitle,
  negativeText,
  positiveText,
  onCancel,
  onSubmit,
}: I3AlertModalProps) => {
  return (
    <Modal
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      useNativeDriverForBackdrop
      hasBackdrop
      isVisible={visible}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          {title && <Text style={styles.title}>{title}</Text>}
          <SizeBox height={16} />
          {subTitle && <Text style={styles.content}>{subTitle}</Text>}
          <SizeBox height={40} />

          <View style={styles.buttonWrapper}>
            <Pressable onPress={onCancel} style={[styles.button, styles.cancelButton]}>
              <Text style={[styles.buttonText, { color: '#606163' }]}>{negativeText}</Text>
            </Pressable>

            <Pressable onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>{positiveText}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default I3AlertModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    height: 40,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#16AB89',
  },
  content: {
    fontSize: 14,
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#F0F0F0',
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
});
