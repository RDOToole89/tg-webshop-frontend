import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../navigation/navigation';
import { StarRatings } from './StarRatings';

import { AddAndRemoveCartItems } from './AddAndRemoveCartItems';

export type TProductCardCheckout = {
  id: number;
  title: string;
  brand: string;
  price: number;
  rating: number;
  ratingQuantity: number;
  platform: string;
  imageUrl: string;
  quantity: number;
};

export const ProductCheckoutCard = ({
  id,
  title,
  brand,
  price,
  rating,
  ratingQuantity,
  platform,
  quantity,
  imageUrl,
}: TProductCardCheckout) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  return (
    <Pressable
      onPress={() => console.log('press')}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: TYPOGRAPHY.COLOR.TertiaryGrey,
        paddingVertical: GLOBAL.SPACING.lg,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.cardLeft}>
          <ResponsiveImage
            source={{ uri: imageUrl }}
            resizeMode={'contain'}
            srcHeight={200}
            srcWidth={150}
          />
        </View>
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ fontSize: GLOBAL.FONT_SIZES.md, fontWeight: 'bold' }}>
            {title} - {brand}
          </Text>
          <Text style={TYPOGRAPHY.FONT.subtitle}>Platform: {platform}</Text>

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
              Order before 23:59, next day delivery
            </Text>
            <AddAndRemoveCartItems
              id={id}
              platform={platform}
              quantity={quantity}
            />
          </View>
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
