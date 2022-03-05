import { View, Text } from 'react-native';
import { useActions } from '../hooks/useActions';
import { SubmitButton } from './SubmitButton';

interface IAddAndRemoveCartItems {
  id: number;
  platform: string;
  quantity: number;
}

export const AddAndRemoveCartItems = ({
  id,
  platform,
  quantity,
}: IAddAndRemoveCartItems) => {
  const { removeFromCart, addToCart, deleteFromCart } = useActions();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
      }}>
      <SubmitButton
        iconSize={30}
        ionIconName='remove-circle-outline'
        handlePress={() => removeFromCart(id, platform)}
      />
      <Text>{quantity}</Text>
      <SubmitButton
        iconSize={30}
        ionIconName='add-circle-outline'
        handlePress={() => addToCart(id, platform)}
      />
      <SubmitButton
        ionIconName='trash-outline'
        handlePress={() => deleteFromCart(id)}
      />
    </View>
  );
};
