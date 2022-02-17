import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import logo from '../../assets/lamestop-logo-transparent.png';
import { IMGSTYLES } from '../global/misc/imgStyles';
import { Image } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';
import { FlexAlignType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type TopBar = {
  align?: FlexAlignType;
  style?: ViewStyle;
};

export const TopBar = ({ align, style }: TopBar) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={[styles(align).topBar, style, GLOBAL.SHADOWS.shadowLight]}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image style={IMGSTYLES.smallLogo} source={logo} />
      </Pressable>
    </View>
  );
};

const styles = (align: FlexAlignType = 'flex-start') =>
  StyleSheet.create({
    topBar: {
      paddingHorizontal: GLOBAL.SPACING.md,
      alignItems: align,
      justifyContent: 'center',
      paddingVertical: GLOBAL.SPACING.sm,
      // shadow: GLOBAL.SHADOWS.shadowLight,
      marginBottom: GLOBAL.SPACING.md,
    },
  });
