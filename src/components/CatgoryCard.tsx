import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, StyleSheet, Pressable } from 'react-native';
import image from '../../assets/oldschool-nes.png';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

import { BottomTabParams } from '../navigation/navigation';
import { NavigationScreenBottom } from '../types/app.types';

type CatgoryCard = {
  categoryName: string;
  imageProp?: any;
  routeString?: NavigationScreenBottom<BottomTabParams>;
};

export const CategoryCard = ({ categoryName, imageProp }: CatgoryCard) => {
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

      <ResponsiveImage
        source={image ? image : imageProp}
        srcWidth={130}
        srcHeight={130}
      />
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
