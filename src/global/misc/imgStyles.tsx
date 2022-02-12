import { Platform, StyleSheet } from 'react-native';
import { GLOBAL } from '../styles/global';

export const IMGSTYLES = StyleSheet.create({
  tinyLogo: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  smallLogo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  mainImage: {
    flex: 1,
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: GLOBAL.SPACING.sm,
  },
  smallImage: {
    flex: 1,
    width: Platform.OS === 'web' ? 300 : 50,
    height: 40,
    resizeMode: 'contain',
  },
});
