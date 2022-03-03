import { useEffect } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { BottomTabParams } from '../navigation/navigation';

import uuid from 'react-native-uuid';
import { View, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { GLOBAL } from '../global/styles/global';
import { useActions } from '../hooks/useActions';
import { RootState } from '../state';

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

  const { loadCategories } = useActions();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    // loadCategories();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TopBar iconsActive={true} />
      <View>
        <SearchBar
          style={{
            marginBottom: GLOBAL.SPACING.md,
            marginTop: GLOBAL.SPACING.sm,
          }}
          onClick={() => navigation.navigate('Search')}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {testData &&
          testData.map((item) => {
            return (
              <PressableCard
                key={uuid.v4().toString()}
                background={background}
                title={item.categoryName}
                onClick={() =>
                  navigation.navigate('Products', {
                    categoryName: item.categoryName,
                  })
                }
              />
            );
          })}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
