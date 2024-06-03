import React, { ReactNode } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import SizeBox from '../sizeBox';
const close = require('./assets/close.png');

interface I3BottomSheetProps {
  title?: string;
  visible: boolean;
  children: ReactNode;
  useSwipeDown?: boolean;
  closeModal(): void;
}

const I3BottomSheet = ({
  useSwipeDown,
  title,
  visible,
  children,
  closeModal,
}: I3BottomSheetProps) => {
  if (useSwipeDown) {
    return (
      <Modal
        swipeDirection={'down'}
        onSwipeComplete={closeModal}
        useNativeDriverForBackdrop
        onBackdropPress={closeModal}
        hasBackdrop
        style={{ margin: 0 }}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={visible}
      >
        <View style={[styles.modal, { paddingTop: 8 }]}>
          <View
            style={{
              height: 5,
              width: 45,
              borderRadius: 3,
              backgroundColor: '#000',
              alignSelf: 'center',
            }}
          />
          <View style={styles.titleWrapper}>
            <SizeBox height={16} />
            {title && <Text style={styles.title}>{title}</Text>}
          </View>
          <SizeBox height={16} />
          {children}
        </View>
      </Modal>
    );
  }
  return (
    <Modal
      useNativeDriverForBackdrop
      hasBackdrop
      onBackdropPress={closeModal}
      style={{ margin: 0 }}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={visible}
    >
      <View style={styles.modal}>
        <View style={styles.titleWrapper}>
          {!!title && <Text style={styles.title}>{title}</Text>}
          <Pressable hitSlop={20} onPress={closeModal} style={styles.closeButton}>
            <CloseIcon />
          </Pressable>
        </View>
        <SizeBox height={16} />
        {children}
      </View>
    </Modal>
  );
};

const CloseIcon = () => {
  return <Image style={{ width: 28, height: 28 }} source={close} />;
};

export default I3BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    paddingBottom: 40,
    marginTop: 'auto',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  titleWrapper: {
    height: 32,
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
