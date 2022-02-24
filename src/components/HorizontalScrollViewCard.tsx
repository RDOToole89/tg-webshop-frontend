import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, StyleSheet, Pressable } from 'react-native';
import image from '../../assets/oldschool-nes.png';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
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
  let cardHeader = title ? title : categoryName;

  if (imageUrl) {
    source = { uri: imageUrl };
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
        {cardHeader}
      </Text>
      <ResponsiveImage source={source} srcWidth={150} srcHeight={150} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardDimensions: {
    backgroundColor: TYPOGRAPHY.COLOR.Tertiary,
    width: 150,
    marginBottom: 10,
    marginRight: 10,
  },
  cardText: {
    textAlign: 'center',
    padding: 2,
    borderWidth: 0,
  },
});
