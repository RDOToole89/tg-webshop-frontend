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
import { GLOBAL } from '../global/styles/global';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { TYPOGRAPHY } from '../global/styles/typography';

import { BottomTabParams } from '../navigation/navigation';
import { NavigationScreenBottom } from '../types/app.types';

interface ICategoryCard {
  categoryName: string;
  imageProp: ImageSourcePropType;
  routeString?: NavigationScreenBottom<BottomTabParams>;
  height?: number;
  width?: number;
}

export const CategoryCard = ({
  categoryName,
  imageProp,
  height,
  width,
}: ICategoryCard) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  return (
    <Pressable
      style={styles.cardDimensions}
      onPress={() =>
        navigation.navigate('Products', {
          categoryName,
        })
      }>
      <Text style={[GLOBAL.TEXT_INPUT.Style.Bold, styles.cardText]}>
        {categoryName}
      </Text>

      <View
        style={{ height: height ? height : 200, width: width ? width : 200 }}>
        <Image style={IMGSTYLES.responsive} source={imageProp} />
      </View>
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
