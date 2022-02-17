import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { GLOBAL } from '../global/styles/global';
import { useActions } from '../hooks/useActions';
import { RootState } from '../state';

const Item = ({ title }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const CategoriesScreen = () => {
  const { loadCategories } = useActions();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    loadCategories();
  }, []);

  const renderItem = ({ item }: any) => <Item title={item.categoryName} />;

  return (
    <View style={styles.container}>
      <Text>Classics</Text>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: any): any => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.xxxl,
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
    fontSize: GLOBAL.FONT_SIZES.sm,
  },
});
