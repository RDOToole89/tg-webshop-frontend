import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from '../hooks/useTypedSelector';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProductsActionCreators } from '../state';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.products);

  const renderItem = ({ item }: any) => <Text>{item.productName}</Text>;

  useEffect(() => {
    dispatch(loadProductsActionCreators.loadProducts());
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
          keyExtractor={(item): any => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
