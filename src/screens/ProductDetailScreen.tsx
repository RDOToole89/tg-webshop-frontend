import { View, Text, StyleSheet } from 'react-native';

export const ProductDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Product Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
