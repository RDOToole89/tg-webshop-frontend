import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import ResponsiveImage from '../global/elements/responsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useActions } from '../hooks/useActions';
import { StarRatings } from '../components/StarRatings';
import { TagMapper } from '../components/TagMapper';
import { PickerGenerator } from '../global/elements/PickerGenerator';
import { SliderBox } from 'react-native-image-slider-box';

export const ProductDetailScreen = ({ route }: any) => {
  const { addToCart } = useActions();

  const {
    id,
    imageUrl,
    price,
    rating,
    ratingQuantity,
    stock,
    tags,
    title,
    platforms,
    extraImages,
  } = route.params;

  console.log(route.params);

  console.log('EXTRIMAGES', extraImages);
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          position: 'relative',
          width: '100%',
        }}>
        <SliderBox
          images={extraImages}
          resizeMethod={'resize'}
          resizeMode={'contain'}
          sliderBoxHeight={300}
          onCurrentImagePressed={(index: any) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor={TYPOGRAPHY.COLOR.BrandRed}
          inactiveDotColor={TYPOGRAPHY.COLOR.BrandBlack}
        />
      </View>
      <View style={{ padding: GLOBAL.SPACING.md }}>
        <Text
          style={{
            fontSize: GLOBAL.FONT_SIZES.lg,
            color: TYPOGRAPHY.COLOR.BrandRed,
          }}>
          {price}
        </Text>
        <Text
          style={[
            TYPOGRAPHY.FONT.subtitle,
            { color: TYPOGRAPHY.COLOR.Success },
          ]}>
          Only {stock} left in stock
        </Text>

        <Text style={GLOBAL.FONTS.h1}>{title}</Text>
        <TagMapper tags={tags} />
        <StarRatings
          rating={rating}
          ratingQuantity={ratingQuantity}
          size={'extraLarge'}
        />

        {platforms && platforms.length > 1 ? (
          <PickerGenerator data={platforms} defaultValue='Select a platform' />
        ) : (
          <Text style={TYPOGRAPHY.FONT.h2}>{platforms[0]}</Text>
        )}

        <Button
          color='#e7230d'
          icon='cart'
          mode='contained'
          onPress={() => addToCart(id)}>
          <Text>Add to cart</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
