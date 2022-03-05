import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import image from '../../assets/oldschool-nes.png';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { GLOBAL } from '../global/styles/global';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { TYPOGRAPHY } from '../global/styles/typography';

import { BottomTabParams, RootStackParams } from '../navigation/navigation';
import { NavigationScreen, NavigationScreenBottom } from '../types/app.types';

interface IHorizontalViewCard {
  title: string;
  categoryName: string;
  imageProp?: ImageSourcePropType;
  imageUrl?: string;
  height?: number;
  width?: number;

  // How to type this ask Remco!
  routeString?:
    | NavigationScreenBottom<BottomTabParams>
    | NavigationScreen<RootStackParams>
    | any;
}

export const HorizontalScrollViewCard = ({
  title,
  categoryName,
  imageProp,
  imageUrl,
  routeString,
  height,
  width,
}: IHorizontalViewCard) => {
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
    <View style={styles.cardDimensions}>
      {/* Type 'undefined' is not assignable to type 'keyof BottomTabParams'.ts(2345)  => without any*/}
      <Pressable onPress={() => navigation.navigate(routeString, params)}>
        <View style={{ paddingVertical: GLOBAL.SPACING.sm }}>
          <Text style={[styles.cardText]}>{cardHeader}</Text>
        </View>

        <View
          style={{ height: height ? height : 200, width: width ? width : 200 }}>
          <Image style={IMGSTYLES.responsive} source={source} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardDimensions: {
    backgroundColor: TYPOGRAPHY.COLOR.Neutral,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: GLOBAL.SPACING.sm,
  },
  cardText: {
    color: TYPOGRAPHY.COLOR.BrandRed,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 0,
  },
});
