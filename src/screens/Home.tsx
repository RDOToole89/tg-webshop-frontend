import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';

import { TopBar } from '../components/TopBar';
import { PromotionBanner } from '../components/PromotionBanner';
import { GLOBAL } from '../global/styles/global';
import { SearchBar } from '../components/SearchBar';

import image from '../../assets/crap-banner.png';
import { DefaultButton } from '../global/elements/buttons';
import { CategoryCard } from './CatgeorieCard';
import { DealBanner } from '../components/DealBanner';

export const Home: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <TopBar />
      <PromotionBanner
        bannerText={'SPECIAL OFFER: pay EXTRA on orders over 100$'}
      />

      <SearchBar />
      <DealBanner source={image} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: GLOBAL.SPACING.md,
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: Platform.OS === 'ios' ? 0 : 8,
          marginBottom: GLOBAL.SPACING.md,
        }}>
        <DefaultButton
          style={{ width: 120 }}
          title='login'
          onClick={() => console.log('click')}
        />
        <DefaultButton
          style={{ width: 120 }}
          title='categories'
          onClick={() => console.log('click')}
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <ScrollView horizontal>
          <CategoryCard categoryName='classics' />
          <CategoryCard categoryName='classics' />
          <CategoryCard categoryName='classics' />
          <CategoryCard categoryName='classics' />
          <CategoryCard categoryName='classics' />
          <CategoryCard categoryName='classics' />
        </ScrollView>
      </ScrollView>

      <Text></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    flex: 1,
    paddingTop: GLOBAL.SPACING.xxxl,
  },
  scrollContainer: {
    padding: GLOBAL.SPACING.md,
    backgroundColor: '#e5e7eb',
  },
  boxSmall: {
    width: 130,
    height: 130,
    marginBottom: 10,
    marginRight: 30,
    paddingVertical: 30,
    backgroundColor: 'skyblue',
  },
});
