import { useEffect } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/navigation';

import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { GLOBAL } from '../global/styles/global';
import { useActions } from '../hooks/useActions';
import { RootState } from '../state';
import { GridList } from '../components/GridList';
import { SearchBar } from '../components/SearchBar';

const Item = ({ title }: any) => (
  <View>
    <Text style={GLOBAL.FONTS.body}>{title}</Text>
  </View>
);

export const CategoriesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const { loadCategories } = useActions();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={GLOBAL.FONTS.h1}>Categories</Text> */}
      <SearchBar />
      {data && (
        <GridList data={data} onClick={() => navigation.navigate('Home')} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: GLOBAL.SPACING.sm,
  },
});
