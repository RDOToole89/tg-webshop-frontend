import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useActions } from '../../hooks/useActions';

export const Cart: React.FC = () => {
  const { addToCart, removeFromCart, deleteFromCart } = useActions();
  console.log('ADD TO CART ACTION', addToCart);

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
