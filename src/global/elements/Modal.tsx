import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Modal as DefaultModal,
  StatusBar,
  Text,
  Pressable,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GLOBAL } from '../styles/global';
import { TYPOGRAPHY } from '../styles/typography';

import { PressableText } from './PressableText';

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: ReactNode;
};

export const Modal = ({ activator: Activator, children }: ModalProps) => {
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <Pressable onPress={() => setModalVisible(false)}>
      <DefaultModal
        visible={isModalVisible}
        transparent={true}
        animationType='fade'>
        <ScrollView
          contentContainerStyle={styles.centerView}
          style={styles.contentView}>
          {children}
          {/* <PressableText onPress={() => setModalVisible(false)} text='x' /> */}
        </ScrollView>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setModalVisible(true)} />
      ) : (
        <PressableText onPress={() => setModalVisible(true)} text='Open' />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centerView: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    height: '100%',
    width: '100%',
    padding: GLOBAL.SPACING.xl,
    marginBottom: 20,
  },
});
