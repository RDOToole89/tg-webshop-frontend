import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { StyleSheet, Modal as DefaultModal, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GLOBAL } from '../styles/global';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../../navigation/navigation';

import { PressableText } from './PressableText';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: ReactNode;
};

export const Modal = ({ activator: Activator, children }: ModalProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  // dismisses the modal when the screen changes
  useFocusEffect(
    useCallback(() => {
      console.log('Modal in focus!');

      return () => {
        setModalVisible(false);
      };
    }, [])
  );

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
