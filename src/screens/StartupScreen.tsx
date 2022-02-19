import {
  ActivityIndicator,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import image from '../../assets/gamepad.png';

import logo from '../../assets/lamestop-logo-transparent.png';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { Image } from 'react-native';

export const StartupScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='contain' style={styles.image}>
        <ActivityIndicator size='large' />
      </ImageBackground>
      <View style={styles.textContainer}>
        <Image style={IMGSTYLES.smallImage} source={logo} />
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
    width: '100%',
    justifyContent: 'center',
  },
});
