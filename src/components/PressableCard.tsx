import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  ImageSourcePropType,
} from 'react-native';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

interface PressableCard {
  background: ImageSourcePropType;
  onClick(): void;
  title: string;
}

export const PressableCard = ({
  background,
  onClick,
  title,
}: PressableCard) => {
  return (
    <Pressable
      onPress={onClick}
      style={[styles.card, GLOBAL.SHADOWS.shadowMedium]}>
      <ImageBackground
        style={styles.image}
        source={background}></ImageBackground>
      <View style={{ zIndex: 1, padding: 15 }}>
        <Text
          style={{
            fontSize: GLOBAL.FONT_SIZES.xsm,
            fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
          }}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    margin: GLOBAL.SPACING.sm,
    height: 170,

    borderRadius: 4,
  },
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
});
