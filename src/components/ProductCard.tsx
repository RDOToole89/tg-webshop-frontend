import { View, Text, StyleSheet, Pressable } from 'react-native';
import ResponsiveImage from '../global/elements/responsiveImage';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import image from '../../assets/ninja-golf-atari.jpg';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

export const ProductCard = () => {
  return (
    <Pressable
      style={{
        borderBottomWidth: 1,
        borderBottomColor: TYPOGRAPHY.COLOR.TertiaryGrey,
        padding: GLOBAL.FONT_SIZES.md,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: 140,
            padding: 10,
            backgroundColor: 'grey',
            marginRight: GLOBAL.SPACING.md,
          }}>
          <ResponsiveImage source={image} srcWidth={150} srcHeight={200} />
        </View>
        <View style={{ justifyContent: 'flex-start' }}>
          <Text style={{ fontSize: GLOBAL.FONT_SIZES.md, fontWeight: 'bold' }}>
            Ninja Golf
          </Text>
          <View>
            <Text>Playstation | Classic | Controller</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {[1, 2, 3, 4, 5].map((x) => (
              <MaterialIcon key={x} name='star' size='medium' color={'gold'} />
            ))}
            <Text>(59)</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: GLOBAL.FONT_SIZES.lg,
                color: TYPOGRAPHY.COLOR.BrandRed,
              }}>
              12,99
            </Text>
            <Text>Only 7 left in stock</Text>
            <Text>Order before 23:59, next day delivery</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
