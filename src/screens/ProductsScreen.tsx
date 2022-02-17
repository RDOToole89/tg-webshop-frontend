import { View, Text, StyleSheet } from 'react-native';

export const ProductsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
