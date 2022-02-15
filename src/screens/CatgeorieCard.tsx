import { View, Text, StyleSheet, Image } from 'react-native';

type CatgoryCard = {
  categoryName: string;
  imageProp?: any;
};

import image from '../../assets/oldschool-nes.png';
import ResponsiveImage from '../global/elements/responsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

export const CategoryCard = ({ categoryName, imageProp }: CatgoryCard) => {
  return (
    <View style={styles.cardDimensions}>
      <Text
        style={[
          GLOBAL.TEXT_INPUT.Style.Bold,
          { textAlign: 'center', padding: 2, borderWidth: 0 },
        ]}>
        {categoryName}
      </Text>

      <ResponsiveImage source={image} srcWidth={130} srcHeight={130} />
    </View>
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
});
