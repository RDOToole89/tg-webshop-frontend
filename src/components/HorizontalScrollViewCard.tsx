import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, StyleSheet, Pressable } from 'react-native';
import image from '../../assets/oldschool-nes.png';
import ResponsiveImage from '../global/elements/responsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

import { BottomTabParams, RootStackParams } from '../navigation/navigation';
import { NavigationScreen, NavigationScreenBottom } from '../types/app.types';

type HorizontalViewCard = {
  title?: string;
  categoryName?: string;
  imageProp?: any;
  imageUrl?: string;

  // How to type this ask Remco!
  routeString?:
    | NavigationScreenBottom<BottomTabParams>
    | NavigationScreen<RootStackParams>
    | any;
};

export const HorizontalScrollViewCard = ({
  title,
  categoryName,
  imageProp,
  imageUrl,
  routeString,
}: HorizontalViewCard) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  const params = title ? { title } : { categoryName };

  let source;

  if (imageUrl) {
    source = imageUrl;
  }

  if (imageProp) {
    source = imageProp;
  }

  if (!imageProp && !imageUrl) {
    source = image;
  }

  return (
    <Pressable
      style={styles.cardDimensions}
      onPress={() => navigation.navigate(routeString, params)}>
      <Text style={[GLOBAL.TEXT_INPUT.Style.Bold, styles.cardText]}>
        {title}
      </Text>
      <ResponsiveImage source={source} srcWidth={130} srcHeight={130} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardDimensions: {
    backgroundColor: TYPOGRAPHY.COLOR.Tertiary,
    width: 130,
    height: 130,
    marginBottom: 10,
    marginRight: 10,
  },
  cardText: {
    textAlign: 'center',
    padding: 2,
    borderWidth: 0,
  },
});
