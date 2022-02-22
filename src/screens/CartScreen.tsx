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

import { BottomTabParams } from '../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Modal } from '../global/elements/Modal';
import { MaterialIcons } from '@expo/vector-icons';
import { NotificationBox } from '../components/NotificationBox';

export const CartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  const { addToCart, removeFromCart, deleteFromCart } = useActions();
  const cartItems = useSelector((state) => state.cart);

  return (
    <ScrollView style={{ flex: 1 }}>
      <TopBar iconsActive={true} />
      <SearchBar placeHolderText='Search LameStop' />
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
                { padding: GLOBAL.SPACING.sm, fontFamily: 'open-sans-bold' },
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
                  <MaterialIcons name='attach-money' size={16} color='black' />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
  cartEmptyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 175,
    marginBottom: GLOBAL.SPACING.sm,
  },
});
