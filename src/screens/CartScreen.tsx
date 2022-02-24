import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { TopBar } from '../components/TopBar';
import { Button } from 'react-native-paper';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { GLOBAL } from '../global/styles/global';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';
import image from '../../assets/shopping-cart-curved.png';
import { TYPOGRAPHY } from '../global/styles/typography';
import { PressableText } from '../global/elements/PressableText';
import { HorizontalScrollView } from '../components/HorizontalScrollView';
import products from '../../assets/data/products.json';
import { DefaultButton } from '../global/elements/buttons';
import { BottomTabParams } from '../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Modal } from '../global/elements/Modal';
import { MaterialIcons } from '@expo/vector-icons';
import { NotificationBox } from '../components/NotificationBox';
import { ProductCheckoutCard } from '../components/ProductCheckoutCard';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import { Dimensions } from 'react-native';
import uuid from 'react-native-uuid';

const productsTest = [
  {
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
  },
  {
    id: 2,
    title: 'Ninja Golf',
    brand: 'Atari',
    price: 29.99,
    rating: 4,
    ratingQuantity: 23,
    tags: ['Classic', 'Ninja', 'Atari', 'Awesome', 'Simulator'],
    platforms: ['Atari'],
    stock: 46,
    desc: "It's",
    imageUrl:
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-scootersim-com_zczyfg.png',
    extraImages: [
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
    ],
  },
  {
    id: 2,
    title: 'Ninja Golf',
    brand: 'Atari',
    price: 29.99,
    rating: 4,
    ratingQuantity: 23,
    tags: ['Classic', 'Ninja', 'Atari', 'Awesome', 'Simulator'],
    platforms: ['Atari'],
    stock: 46,
    desc: "It's",
    imageUrl:
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-scootersim-com_zczyfg.png',
    extraImages: [
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
    ],
  },
  {
    id: 2,
    title: 'Ninja Golf',
    brand: 'Atari',
    price: 29.99,
    rating: 4,
    ratingQuantity: 23,
    tags: ['Classic', 'Ninja', 'Atari', 'Awesome', 'Simulator'],
    platforms: ['Atari'],
    stock: 46,
    desc: "It's",
    imageUrl:
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-scootersim-com_zczyfg.png',
    extraImages: [
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
      'https://res.cloudinary.com/dqrgx8g71/image/upload/v1645309870/tg-web-shop/tg-webshop-coverart/ninja-golf-atari_pnbgnv.jpg',
    ],
  },
];

export const CartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  const { addToCart, removeFromCart, deleteFromCart } = useActions();
  const cartItems = useSelector((state) => state.cart);
  const empty = false;

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // console.log('WindowWidth', windowWidth);
  // console.log('WindowHeight', windowHeight);

  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: windowWidth,
        }}>
        <Button
          style={{ position: 'relative', borderRadius: 0, zIndex: 10 }}
          color='#e7230d'
          icon={() => (
            <MaterialIcons
              name='attach-money'
              size={24}
              color={TYPOGRAPHY.COLOR.Default}
            />
          )}
          mode='contained'
          onPress={() => console.log('ORDER')}>
          <Text>Complete Order</Text>
        </Button>
      </View>

      <TopBar iconsActive={true} />
      <SearchBar placeHolderText='Search LameStop' />
      {empty ? (
        <>
          <View style={styles.container}>
            <View style={styles.cartEmptyWrapper}>
              <View style={{ height: 120, width: 120 }}>
                <ResponsiveImage
                  source={image}
                  resizeMode={'contain'}
                  srcHeight={200}
                  srcWidth={200}
                />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text
                  style={[
                    TYPOGRAPHY.FONT.default,
                    {
                      padding: GLOBAL.SPACING.sm,
                      fontFamily: 'open-sans-bold',
                    },
                  ]}>
                  Your LameStop cart is empty :(
                </Text>
                <Text style={TYPOGRAPHY.FONT.subtitle}>
                  We're pretty broke help us out here!
                </Text>
                <PressableText
                  textStyle={{ textDecorationLine: 'underline' }}
                  text='continue shopping'
                  onPress={() => navigation.navigate('Home')}
                />
              </View>
            </View>
          </View>
          <HorizontalScrollView
            dataArray={products}
            title='Recently viewed articles'
            routeString={'Products'}
          />

          <View style={{ padding: GLOBAL.SPACING.md }}>
            <Modal
              activator={({ handleOpen }) => (
                <>
                  <Button
                    style={{
                      marginBottom: GLOBAL.SPACING.md,
                      alignSelf: 'center',
                      marginTop: GLOBAL.SPACING.md,
                    }}
                    color='#e7230d'
                    icon={() => (
                      <MaterialIcons
                        name='attach-money'
                        size={16}
                        color='black'
                      />
                    )}
                    mode='contained'
                    onPress={() => {
                      handleOpen();
                      setTimeout(() => {
                        navigation.goBack();
                      }, 2000);
                    }}>
                    Continue shopping... please?
                  </Button>
                </>
              )}>
              <NotificationBox notificationText="It's always better to spend it right?" />
            </Modal>
          </View>
        </>
      ) : (
        <ScrollView style={styles.scrollContainer}>
          <Text
            style={[
              TYPOGRAPHY.FONT.h1,
              { fontFamily: TYPOGRAPHY.FONT.PrimaryBold },
            ]}>
            Shopping Cart
          </Text>
          <View
            style={[
              GLOBAL.LAYOUT.rowCenter,

              {
                justifyContent: 'space-between',
                alignItems: 'center',
                // backgroundColor: 'grey',
              },
            ]}>
            <View>
              <Text style={TYPOGRAPHY.FONT.h2}>Total</Text>
              <Text
                style={[
                  TYPOGRAPHY.FONT.h1,
                  { color: TYPOGRAPHY.COLOR.BrandRed },
                ]}>
                299,99
              </Text>
            </View>

            <Button
              style={{}}
              color='#e7230d'
              icon='cart'
              mode='contained'
              onPress={() => console.log('ORDER')}>
              <Text>Order</Text>
            </Button>
          </View>
          <View>
            {productsTest.map(
              ({
                id,
                title,
                brand,
                price,
                rating,
                ratingQuantity,
                imageUrl,
                platforms,
              }) => {
                return (
                  <ProductCheckoutCard
                    key={uuid.v4().toString()}
                    id={id}
                    title={title}
                    brand={brand}
                    price={price}
                    rating={rating}
                    ratingQuantity={ratingQuantity}
                    imageUrl={imageUrl}
                    platform={platforms[0]}
                  />
                );
              }
            )}
          </View>
          <View
            style={{
              justifyContent: 'center',
              height: 150,
              marginBottom: GLOBAL.SPACING.xxl,
            }}>
            <DefaultButton
              style={{
                flexDirection: 'row',
                backgroundColor: TYPOGRAPHY.COLOR.Secondary,
              }}
              title='Continue Shopping'
              onClick={() => navigation.navigate('Categories')}
              icon={
                <MaterialIcon
                  size='large'
                  name='person'
                  color={TYPOGRAPHY.COLOR.BrandBlack}
                />
              }
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: GLOBAL.SPACING.sm,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: GLOBAL.SPACING.sm,
  },
  cartEmptyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 175,
    marginBottom: GLOBAL.SPACING.sm,
  },
});
