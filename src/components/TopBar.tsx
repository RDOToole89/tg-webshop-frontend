import { View, Text, StyleSheet } from 'react-native';
import logo from '../../assets/lamestop-logo-transparent.png';
import { IMGSTYLES } from '../global/misc/imgStyles';
import { Image } from 'react-native';
import { GLOBAL } from '../global/styles/global';

export const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Image style={IMGSTYLES.smallLogo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: GLOBAL.SPACING.sm,
  },
});
