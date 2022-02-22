import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { TopBar } from '../components/TopBar';
import ResponsiveImage from '../global/elements/responsiveImage';
import { GLOBAL } from '../global/styles/global';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';
import image from '../../assets/shopping-cart-curved.png';
import { TYPOGRAPHY } from '../global/styles/typography';
import { PressableText } from '../global/elements/PressableText';
import categories from '../../assets/data/categories.json';
import { CategoryCard } from '../components/CatgoryCard';
import { HorizontalScrollView } from '../components/HorizontalScrollView';
import products from '../../assets/data/products.json';

import { BottomTabParams, RootStackParams } from '../navigation/navigation';
import { useNavigation } from '@react-navigation/native';

export const CartScreen = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  const { addToCart, removeFromCart, deleteFromCart } = useActions();
  const cartItems = useSelector((state) => state.cart);

  console.log(image);

  return (
    <View>
      <TopBar iconsActive={true} />
      <SearchBar placeHolderText='Search LameStop' />
      <View style={styles.container}>
        <View style={[{ flexDirection: 'row', height: 300 }]}>
          <View style={{ height: 100, width: 100 }}>
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
              onPress={() => console.log('home')}
            />
          </View>
        </View>
      </View>
      <HorizontalScrollView
        dataArray={products}
        title='Recently viewed articles'
        routeString={'Products'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: GLOBAL.SPACING.xl,
    paddingHorizontal: GLOBAL.SPACING.md,
  },
});
