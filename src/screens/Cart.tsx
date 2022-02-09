import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { cartActionCreators } from '../state';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { addToCart, removeFromCart } = useActions();

  const onPress = () => {
    dispatch(cartActionCreators.addToCart(1));
  };

  const onPress2 = () => {
    dispatch(cartActionCreators.removeFromCart(1));
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
