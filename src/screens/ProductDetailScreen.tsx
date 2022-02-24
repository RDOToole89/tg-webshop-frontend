import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useActions } from '../hooks/useActions';
import { StarRatings } from '../components/StarRatings';
import { TagMapper } from '../components/TagMapper';
import { PickerGenerator } from '../global/elements/PickerGenerator';
import { HorizontalRule } from '../global/elements/HorizontalRule';
import reviews from '../../assets/data/reviews.json';
import { ReviewCard } from '../components/ReviewCard';
import uuid from 'react-native-uuid';
import { ReferenceBar } from '../components/ReferenceBar';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { ImageCarousel } from '../components/ImageCarousel';

export const ProductDetailScreen = ({ route }: any) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [showAllReviews, setShowAllReviews] = useState(false);

  const { addToCart } = useActions();

  let Product = {
    id: 1,
    title: 'Ninja Golf',
    brand: 'Atari',
    price: 12.99,
    rating: 5,
    ratingQuantity: 63,
    tags: ['Classic', 'Ninja', 'Atari', 'Awesome'],
    platforms: ['Atari', 'Comodore', 'Amiga'],
    stock: 100,
    desc: "It's the ultimate Ninja and sporting challenge, a game of golf and fierce Ninja battle. Swing and kick away at Ninjas, duck whipping stars, pick up treasures, and shoot for birdies, it's all part of a day's fun. In Ninja Golf, Par for the course is leaving a trail of fallen enemies. But you're not done yet. The Master Ninja awaits your completion of the ninth hole. Do you have what it takes to ace this course? Can you become the Ninja golf master? Text (C) 1990, 2007 Atari",
    imageUrl:
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
    extraImages: [
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
    ],
  };

  const {
    id = 1,
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
  } = Product;

  const renderItem = (
    userNameTest: string,
    content: string,
    title: string,
    reviewScore: number,
    likes: number,
    key: string
  ) => {
    return (
      <ReviewCard
        key={key}
        userNameTest={userNameTest}
        title={title}
        content={content}
        reviewScore={reviewScore}
        likes={likes}
      />
    );
  };

  return (
    <ScrollView style={GLOBAL.LAYOUT.container}>
      <View
        style={{
          position: 'relative',
          width: '100%',
        }}>
        {extraImages.length > 100 ? (
          // <ImageCarousel height={100} width={100} images={extraImages} />
          <Text>TEMPORARY</Text>
        ) : (
          <ResponsiveImage
            source={{
              uri: imageUrl,
            }}
            srcHeight={200}
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
          <PickerGenerator
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
            data={platforms}
            defaultValue='Select a platform'
          />
        ) : (
          <Text style={TYPOGRAPHY.FONT.h2}>{platforms[0]}</Text>
        )}

        <Button
          style={{ marginBottom: GLOBAL.SPACING.md }}
          color='#e7230d'
          icon='cart'
          mode='contained'
          onPress={() => addToCart(id, selectedPlatform)}>
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
        {!showAllReviews
          ? reviews.map(
              ({ userNameTest, title, content, reviewScore, likes }, i) => {
                let key = uuid.v4().toString();

                if (i < 4) {
                  return renderItem(
                    userNameTest,
                    content,
                    title,
                    reviewScore,
                    likes,
                    key
                  );
                }

                if (i === 5) {
                  return (
                    <View key={key}>
                      <Button
                        style={{
                          borderRadius: 0,
                          borderWidth: 1,
                          borderColor: '#000',
                          width: '50%',
                        }}
                        color='#fff'
                        mode='contained'
                        onPress={() => navigation.navigate('Review')}>
                        <Text style={GLOBAL.TEXT.Default}>Write a review</Text>
                      </Button>
                      <ReferenceBar
                        routeString='Home'
                        iconName='keyboard-arrow-right'
                        onClick={() => {
                          setShowAllReviews(true);
                        }}
                        barText='See all reviews'
                        modalBar={true}
                      />
                    </View>
                  );
                }

                return;
              }
            )
          : reviews.map(
              ({ userNameTest, title, content, reviewScore, likes }, i) => {
                let key = uuid.v4().toString();
                if (reviews.length && i < reviews.length - 1) {
                  return renderItem(
                    userNameTest,
                    title,
                    content,
                    reviewScore,
                    likes,
                    key
                  );
                }

                if (i === reviews.length - 1) {
                  return (
                    <View key={key}>
                      <Button
                        style={{
                          borderRadius: 0,
                          borderWidth: 1,
                          borderColor: '#000',
                          width: '50%',
                        }}
                        color='#fff'
                        mode='contained'
                        onPress={() => navigation.navigate('Review')}>
                        <Text style={GLOBAL.TEXT.Default}>Write a review</Text>
                      </Button>
                      <ReferenceBar
                        routeString='Home'
                        iconName='keyboard-arrow-right'
                        onClick={() => {
                          setShowAllReviews(false);
                        }}
                        barText='Show less reviews'
                        modalBar={true}
                      />
                    </View>
                  );
                }
                return;
              }
            )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
