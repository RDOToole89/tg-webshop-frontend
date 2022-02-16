import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';

export const CartScreen: React.FC = () => {
  const { addToCart, removeFromCart, deleteFromCart } = useActions();
  const cartItems = useSelector((state) => state.cart);
  console.log('ADD TO CART ACTION', addToCart);
  console.log('CARTITEMS', cartItems);

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * max) + min;
  };

  const onPress = () => {
    addToCart(randomNumber(1, 3));
  };

  const onPress2 = () => {
    removeFromCart(randomNumber(1, 3));
  };

  const onPress3 = () => {
    deleteFromCart(randomNumber(1, 3));
  };

  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>add to cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2}>
        <Text>remove from cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress3}>
        <Text>delete from cart</Text>
      </TouchableOpacity>

      {/* <FlatList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
