import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import uuid from 'react-native-uuid';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../navigation/navigation';
import { StarRatings } from './StarRatings';
import { SubmitButton } from './SubmitButton';

import { useActions } from '../hooks/useActions';

export type ProductCardCheckout = {
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
}: ProductCardCheckout) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();
  const { addToCart, removeFromCart, deleteFromCart } = useActions();

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
            source={{
              uri: imageUrl,
            }}
            srcWidth={150}
            srcHeight={200}
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor: 'transparent',
              }}>
              <SubmitButton
                iconSize={30}
                ionIconName='remove-circle-outline'
                handlePress={() => removeFromCart(id, platform)}
              />
              <Text>{quantity}</Text>
              <SubmitButton
                iconSize={30}
                ionIconName='add-circle-outline'
                handlePress={() => addToCart(id, platform)}
              />
              <SubmitButton
                ionIconName='trash-outline'
                handlePress={() => deleteFromCart(id)}
              />
            </View>
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
