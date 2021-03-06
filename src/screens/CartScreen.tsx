import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from '../components/SearchBar';

import { Button } from 'react-native-paper';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import { GLOBAL } from '../global/styles/global';

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import products from '../../assets/data/products.json';
import image from '../../assets/shopping-cart-curved.png';
import { HorizontalScrollView } from '../components/HorizontalScrollView';
import { NotificationBox } from '../components/NotificationBox';
import { ProductCheckoutCard } from '../components/ProductCheckoutCard';
import { DefaultButton } from '../global/elements/buttons';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import { Modal } from '../global/elements/Modal';
import { PressableText } from '../global/elements/PressableText';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useSelector } from '../hooks/useTypedSelector';
import { BottomTabParams } from '../navigation/navigation';

import americanExpressLogo from '../../assets/american-express-logo.png';
import idealLogo from '../../assets/ideal-logo.png';
import masterCardLogo from '../../assets/mastercard-logo.png';
import visaLogo from '../../assets/visa-logo.png';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { TCartItem } from '../types/data.types';

export const CartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  const cart = useSelector((state) => state.cart);
  const isEmpty = cart.cartItems.length;

  const cartItemsToRender = cart.cartItems.map(
    ({ productId, quantity, platform }) => {
      const product = products.find((product) => product.id === productId)!;

      const cartItem = {
        id: productId,
        title: product.title,
        brand: product.brand,
        price: Number(product.price),
        rating: Number(product.rating),
        ratingQuantity: Number(product.ratingQuantity),
        platform: platform,
        imageUrl: product.imageUrl,
        quantity,
      };

      return cartItem;
    }
  );

  const priceTotal = cartItemsToRender.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        placeHolderText='Search Lamestop...'
        onClick={() => navigation.navigate('Search')}
        style={{ marginHorizontal: GLOBAL.SPACING.md }}
      />
      {isEmpty ? (
        <Button
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            borderRadius: 0,
            backgroundColor: TYPOGRAPHY.COLOR.BrandRed,
            zIndex: 100,
          }}>
          <Text style={{ color: TYPOGRAPHY.COLOR.Default }}>
            Complete Order
          </Text>
        </Button>
      ) : null}
      {!isEmpty ? (
        <>
          <View>
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
              },
            ]}>
            <View>
              <Text style={TYPOGRAPHY.FONT.h2}>Total</Text>
              <Text
                style={[
                  TYPOGRAPHY.FONT.h1,
                  { color: TYPOGRAPHY.COLOR.BrandRed },
                ]}>
                {priceTotal.toFixed(2)}
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
            {cartItemsToRender.map((cartItem: TCartItem) => {
              return <ProductCheckoutCard key={cartItem.id} {...cartItem} />;
            })}
          </View>
          <View
            style={{
              justifyContent: 'center',
              paddingBottom: GLOBAL.SPACING.md,
              marginVertical: GLOBAL.SPACING.md,
            }}>
            <DefaultButton
              style={{
                flexDirection: 'row',
                backgroundColor: TYPOGRAPHY.COLOR.Secondary,
                margin: GLOBAL.SPACING.lg,
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
            <Text style={{ textAlign: 'center' }}>Pay with confidence</Text>
            <View
              style={[
                GLOBAL.LAYOUT.rowCenter,
                {
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                  marginBottom: GLOBAL.SPACING.md,
                },
              ]}>
              <View style={IMGSTYLES.tinyLogo}>
                <ResponsiveImage
                  resizeMode='contain'
                  source={idealLogo}
                  srcHeight={10}
                  srcWidth={10}
                />
              </View>
              <View style={IMGSTYLES.tinyLogo}>
                <ResponsiveImage
                  source={masterCardLogo}
                  srcHeight={10}
                  srcWidth={10}
                />
              </View>
              <View style={IMGSTYLES.tinyLogo}>
                <ResponsiveImage
                  source={visaLogo}
                  srcHeight={10}
                  srcWidth={10}
                />
              </View>
              <View style={IMGSTYLES.tinyLogo}>
                <ResponsiveImage
                  source={americanExpressLogo}
                  srcHeight={10}
                  srcWidth={10}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
  cartEmptyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 175,
    padding: GLOBAL.SPACING.md,
    marginBottom: GLOBAL.SPACING.sm,
  },
});
