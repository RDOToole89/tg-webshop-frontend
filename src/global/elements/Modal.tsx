import { FunctionComponent, ReactNode, useState } from 'react';
import { View, Text, StyleSheet, Modal as DefaultModal } from 'react-native';
import { PressableText } from './PressableText';

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: ReactNode;
};

export const Modal = ({ activator: Activator, children }: ModalProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <DefaultModal
        visible={isModalVisible}
        transparent={false}
        animationType='fade'>
        <View style={styles.centerView}>
          <View style={styles.contentView}>{children}</View>
          <PressableText onPress={() => setModalVisible(false)} text='close' />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setModalVisible(true)} />
      ) : (
        <PressableText onPress={() => setModalVisible(true)} text='Open' />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    marginBottom: 20,
  },
});
