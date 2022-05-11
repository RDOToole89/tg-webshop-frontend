import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParams } from '../navigation/navigation';

import { StyleSheet, View } from 'react-native';

import { GLOBAL } from '../global/styles/global';

import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from '../components/SearchBar';
import { TopBar } from '../components/TopBar';

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

  // TODO: Hookup to backend
  // const { loadCategories } = useActions();
  // const { data, error, loading } = useSelector(
  //   (state: RootState) => state.categories
  // );

  // useEffect(() => {
  //   // loadCategories();
  // }, []);

  return (
    <ScrollView style={styles.container}>
      <TopBar
        iconsActive={true}
        style={{ marginHorizontal: GLOBAL.SPACING.sm }}
      />
      <View>
        <SearchBar
          style={{
            marginBottom: GLOBAL.SPACING.md,
            marginTop: GLOBAL.SPACING.sm,
            marginHorizontal: GLOBAL.SPACING.md,
          }}
          onClick={() => navigation.navigate('Search')}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          paddingBottom: GLOBAL.SPACING.md,
        }}>
        {testData &&
          testData.map((item) => {
            return (
              <PressableCard
                key={Math.random()}
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
