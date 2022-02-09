import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from '../hooks/useTypedSelector';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { fontSizes } from '../constants/sizes';
import { useActions } from '../hooks/useActions';

export const Home: React.FC = () => {
  const { loadProducts } = useActions();
  const { data, error, loading } = useSelector((state) => state.products);

  const Item = ({ title }: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }: any) => <Text>{item.productName}</Text>;

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text>HOME SCREEEN</Text>
      {error && <h3>{error}</h3>}
      {loading && <ActivityIndicator size='small' color='000' />}
      {!error && !loading && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item): any => item.productId}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: fontSizes.sm,
  },
});
