import { View, Text, StyleSheet } from 'react-native';

export const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
