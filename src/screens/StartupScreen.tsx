import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

import image from '../../assets/gamepad.png';
import { useCustomFonts } from '../hooks/useCustomFonts';

export const StartupScreen = () => {
  const fonts = useCustomFonts();
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='center' style={styles.image}>
        <ActivityIndicator size='large' />
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text
          style={[headerStyle('#212322').header, headerStyle().textWithShadow]}>
          Lame
        </Text>
        <Text
          style={[headerStyle('#ee2a28').header, headerStyle().textWithShadow]}>
          Stop
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  textContainer: {
    top: 100,
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

const headerStyle = (color?: string) =>
  StyleSheet.create({
    header: {
      color: color,
      fontSize: 42,
      fontWeight: 'bold',
      fontFamily: 'impact',
      letterSpacing: 2,
    },
    textWithShadow: {
      textShadowColor: 'rgba(0, 0, 0, 0.3)',
      textShadowOffset: { width: -0.5, height: 0.5 },
      textShadowRadius: 3,
    },
  });
