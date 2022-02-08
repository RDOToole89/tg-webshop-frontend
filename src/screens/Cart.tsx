import { View, Text, StyleSheet } from 'react-native';

export const Cart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
