import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { RootState } from '../state';

export const CategoriesScreen = ({}) => {
  const { loadCategories } = useActions();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    loadCategories();

    console.log(data);
  }, []);

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
