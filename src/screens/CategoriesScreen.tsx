import { View, Text, StyleSheet } from 'react-native';

export const CategoriesScreen: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Classics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
