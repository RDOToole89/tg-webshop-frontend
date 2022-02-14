import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import logo from '../../assets/lamestop-logo-transparent.png';
import { IMGSTYLES } from '../global/misc/imgStyles';
import { Image } from 'react-native';
import { GLOBAL } from '../global/styles/global';

import { FlexAlignType } from 'react-native';

type TopBar = {
  align?: FlexAlignType;
  style?: ViewStyle;
};

export const TopBar = ({ align, style }: TopBar) => {
  console.log(style);
  return (
    <View style={[styles(align).topBar, style]}>
      <Image style={IMGSTYLES.smallLogo} source={logo} />
    </View>
  );
};

const styles = (align: FlexAlignType = 'center') =>
  StyleSheet.create({
    topBar: {
      alignItems: align,
      justifyContent: 'center',
      paddingVertical: GLOBAL.SPACING.sm,
    },
  });
