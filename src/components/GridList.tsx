import {
  FlatList,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/navigation';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import background from '../../assets/card-bg.png';
import { PressableCard } from './PressableCard';

export const GridList = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <>
      <FlatList
        contentContainerStyle={styles.grid}
        numColumns={3}
        data={props.data}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <PressableCard
              background={background}
              title={item.categoryName}
              onClick={() => navigation.navigate('Home')}
            />
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    margin: GLOBAL.SPACING.sm,
    height: 150,
    color: 'white',
    borderWidth: 1,
    borderColor: TYPOGRAPHY.COLOR.BrandRed,
    borderRadius: 4,
  },
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  grid: {
    flex: 1,
    justifyContent: 'center',
  },
});
