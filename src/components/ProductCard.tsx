import { View, Text, StyleSheet, Pressable } from 'react-native';
import ResponsiveImage from '../global/elements/responsiveImage';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import uuid from 'react-native-uuid';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

type ProductCard = {
  id: number;
  title: string;
  price: number;
  rating: number;
  ratingQuantity: number;
  tags: string[];
  stock: number;
  imageUrl: string;
};

export const ProductCard = ({
  id,
  title,
  price,
  rating,
  ratingQuantity,
  tags,
  stock,
  imageUrl,
}: ProductCard) => {
  return (
    <Pressable
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
          <View style={{ flexDirection: 'row' }}>
            {tags.map((tag, i) => {
              if (i === tags.length - 1) {
                return (
                  <Text style={TYPOGRAPHY.FONT.subtitle} key={tag}>
                    {tag}
                  </Text>
                );
              }
              return (
                <Text style={TYPOGRAPHY.FONT.subtitle} key={tag}>
                  {tag} |
                </Text>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {new Array(rating).fill('x').map((x) => (
              <MaterialIcon
                key={uuid.v4().toString()}
                name='star'
                size='small'
                color={'gold'}
              />
            ))}
            <Text
              style={{
                fontSize: GLOBAL.FONT_SIZES.xsm,
                marginLeft: GLOBAL.SPACING.sm,
              }}>
              ({ratingQuantity})
            </Text>
          </View>
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
