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
import { HorizontalRule } from '../global/elements/HorizontalRule';
import reviews from '../../assets/data/reviews.json';
import { ReviewCard } from '../components/ReviewCard';
import uuid from 'react-native-uuid';

export const ProductDetailScreen = ({ route }: any) => {
  const { addToCart } = useActions();

  const {
    id,
    imageUrl,
    brand,
    price,
    rating,
    desc,
    ratingQuantity,
    stock,
    tags,
    title,
    platforms,
    extraImages,
  } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          position: 'relative',
          width: '100%',
        }}>
        {extraImages.length > 1 ? (
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
        ) : (
          <ResponsiveImage
            source={{
              uri: imageUrl,
            }}
            srcHeight={150}
            srcWidth={200}
            resizeMode='contain'
          />
        )}
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

        <Text style={GLOBAL.FONTS.h1}>
          {title} - {brand}
        </Text>
        <TagMapper tags={tags} />
        <StarRatings
          rating={rating}
          ratingQuantity={ratingQuantity}
          size={'extraLarge'}
          style={{ marginBottom: GLOBAL.SPACING.md }}
        />

        {platforms && platforms.length > 1 ? (
          <PickerGenerator data={platforms} defaultValue='Select a platform' />
        ) : (
          <Text style={TYPOGRAPHY.FONT.h2}>{platforms[0]}</Text>
        )}

        <Button
          style={{ marginBottom: GLOBAL.SPACING.md }}
          color='#e7230d'
          icon='cart'
          mode='contained'
          onPress={() => addToCart(id)}>
          <Text>Add to cart</Text>
        </Button>
        <Text
          style={[
            TYPOGRAPHY.FONT.h3,
            { fontFamily: TYPOGRAPHY.FONT.PrimaryBold },
          ]}>
          Product description
        </Text>
        <Text
          style={[TYPOGRAPHY.FONT.subtitle, { lineHeight: GLOBAL.SPACING.lg }]}>
          {desc}
        </Text>
        <HorizontalRule
          style={{
            marginVertical: GLOBAL.SPACING.md,
          }}
        />
        <Text
          style={[
            TYPOGRAPHY.FONT.h3,
            {
              fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
            },
          ]}>
          Reviews
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={[
              TYPOGRAPHY.FONT.h1,
              {
                fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
              },
            ]}>
            {rating.toFixed(1)}
          </Text>
          <StarRatings rating={rating} size={'extraLarge'} />
        </View>
        <Text style={{ textAlign: 'right' }}>{ratingQuantity} reviews</Text>
        {reviews.map(({ userNameTest, title, content, reviewScore, likes }) => {
          return (
            <ReviewCard
              key={uuid.v4().toString()}
              userNameTest={userNameTest}
              title={title}
              content={content}
              reviewScore={reviewScore}
              likes={likes}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
