import { View, Text, StyleSheet, Pressable, Button } from 'react-native';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../navigation/navigation';
import { StarRatings } from './StarRatings';
import { TagMapper } from './TagMapper';

type ProductCard = {
  id: number | string;
  title: string;
  brand: string;
  price: number;
  rating: number;
  ratingQuantity: number;
  tags: string[];
  platforms: string[];
  desc: string;
  stock: number;
  imageUrl: string;
  extraImages: string[];
};

export const ProductCard = ({
  id,
  title,
  brand,
  price,
  rating,
  ratingQuantity,
  tags,
  desc,
  platforms,
  stock,
  imageUrl,
  extraImages,
  test,
  handleDelete,
}: ProductCard & {
  test?: boolean;
  handleDelete?: (id: string | number) => void;
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ProductDetails', {
          id,
          title,
          brand,
          price,
          rating,
          desc,
          ratingQuantity,
          tags,
          platforms,
          stock,
          imageUrl,
          extraImages,
        })
      }
      style={{
        borderBottomWidth: 1,
        borderBottomColor: TYPOGRAPHY.COLOR.TertiaryGrey,
        padding: GLOBAL.FONT_SIZES.md,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cardLeft}>
          <ResponsiveImage
            source={{
              uri: imageUrl,
            }}
            srcWidth={150}
            srcHeight={200}
          />
        </View>
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ fontSize: GLOBAL.FONT_SIZES.md, fontWeight: 'bold' }}>
            {title}
          </Text>
          <TagMapper tags={tags} />
          <StarRatings rating={rating} ratingQuantity={ratingQuantity} />
          <View>
            <Text
              style={{
                fontSize: GLOBAL.FONT_SIZES.lg,
                color: TYPOGRAPHY.COLOR.BrandRed,
              }}>
              {price}
            </Text>
            <Text style={[TYPOGRAPHY.FONT.subtitle, styles.textGreen]}>
              Only {stock} left in stock
            </Text>
            <Text style={[TYPOGRAPHY.FONT.subtitle, styles.textGreen]}>
              Order before 23:59, next day delivery
            </Text>
          </View>
          {test && (
            <Button
              title='delete card'
              onPress={
                handleDelete
                  ? () => handleDelete(id)
                  : () => console.log('delete')
              }
              color={TYPOGRAPHY.COLOR.BrandRed}
            />
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardLeft: {
    width: 100,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    marginRight: GLOBAL.SPACING.md,
  },
  textGreen: {
    color: TYPOGRAPHY.COLOR.Success,
  },
});
