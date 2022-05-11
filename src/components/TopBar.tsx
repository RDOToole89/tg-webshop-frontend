import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import logo from '../../assets/lamestop-logo-transparent.png';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlexAlignType, Image } from 'react-native';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import { GLOBAL } from '../global/styles/global';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { RootStackParams } from '../navigation/navigation';

interface ITopBar {
  align?: FlexAlignType;
  style?: ViewStyle;
  iconsActive: Boolean;
}

export const TopBar = ({ align, style, iconsActive = false }: ITopBar) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={[styles(align).topBar, style, GLOBAL.SHADOWS.shadowLight]}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image style={IMGSTYLES.smallLogo} source={logo} />
      </Pressable>
      {iconsActive && (
        <View style={styles().iconsContainer}>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <MaterialIcon name='home' size='large' color='#000' />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <MaterialIcon name='person' size='large' color='#000' />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = (align: FlexAlignType = 'center') =>
  StyleSheet.create({
    topBar: {
      flexDirection: 'row',
      paddingHorizontal: GLOBAL.SPACING.sm,
      alignItems: align,
      justifyContent: 'space-between',
      marginBottom: GLOBAL.SPACING.sm,
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '30%',
    },
  });
