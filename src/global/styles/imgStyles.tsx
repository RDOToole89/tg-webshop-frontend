import { Platform, StyleSheet } from 'react-native';
import { GLOBAL } from './global';

export const IMGSTYLES = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  smallLogo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  headerLogo: {
    width: 90,
    height: 35,
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
  responsive: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
