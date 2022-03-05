import { View, Text, StyleSheet, Pressable, Button, Image } from 'react-native';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../navigation/navigation';
import { StarRatings } from './StarRatings';

import { TagMapper } from './TagMapper';
import { IMGSTYLES } from '../global/styles/imgStyles';

export interface IProductCard {
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
  key?: string | number;
  categoryName?: string;
  extraImages: string[];
  test?: boolean;
  handleDelete?: (id: string | number) => void;
}

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
  categoryName,
}: IProductCard) => {
  // console.log('CATEGORYNAME PRODUCTCARD', categoryName);

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
          categoryName,
        })
      }
      style={styles.cardContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cardLeft}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={[IMGSTYLES.responsive]}
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
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: TYPOGRAPHY.COLOR.TertiaryGrey,
    marginBottom: GLOBAL.SPACING.md,
    paddingBottom: GLOBAL.SPACING.md,
  },
  cardLeft: {
    width: 100,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    marginRight: GLOBAL.SPACING.md,
  },
  textGreen: {
    color: TYPOGRAPHY.COLOR.Success,
  },
});
