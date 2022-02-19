import { useEffect } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { BottomTabParams } from '../navigation/navigation';

import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { GLOBAL } from '../global/styles/global';
import { useActions } from '../hooks/useActions';
import { RootState } from '../state';
import { GridList } from '../components/GridList';
import { SearchBar } from '../components/SearchBar';
import { TopBar } from '../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';

import background from '../../assets/card-bg.png';
import { PressableCard } from '../components/PressableCard';

import testData from '../../assets/data/categories.json';

export const CategoriesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();

  type Category = {
    id: number;
    categoryName: string;
    description: string;
  };

  type RenderItem = {
    item: Category;
  };

  const renderItem = ({ item }: RenderItem) => {
    return (
      <PressableCard
        background={background}
        title={item.categoryName}
        onClick={() =>
          navigation.navigate('Products', {
            categoryName: item.categoryName,
          })
        }
      />
    );
  };

  const { loadCategories } = useActions();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <ScrollView overScrollMode='auto'>
      <TopBar iconsActive={true} />
      <View style={styles.container}>
        <SearchBar
          style={{
            marginBottom: GLOBAL.SPACING.md,
            marginTop: GLOBAL.SPACING.sm,
          }}
        />
        {testData && (
          <GridList
            data={testData}
            onClick={() => console.log('click')}
            renderItem={renderItem}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GLOBAL.SPACING.md,
  },
});
