import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TopBar } from '../components/TopBar';
import { PromotionBanner } from '../components/PromotionBanner';
import { GLOBAL } from '../global/styles/global';
import { SearchBar } from '../components/SearchBar';

import image from '../../assets/lame-banner.png';
import { DefaultButton } from '../global/elements/buttons';
import { CategoryCard } from '../components/CatgoryCard';
import { DealBanner } from '../components/DealBanner';
import { MessageBanner } from '../components/MessageBanner';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/navigation';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import { TYPOGRAPHY } from '../global/styles/typography';

const user = 'Roibin';
const loggedIn = true;

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <ScrollView style={styles.container}>
      <MessageBanner
        message={loggedIn ? `Welcome back ${user}` : `Welcome to LameStop`}
        delay={2000}
      />
      <TopBar style={{ backgroundColor: '#fff' }} iconsActive={false} />
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
          style={{
            width: 120,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
          title='login'
          onClick={() => navigation.navigate('LoginStack')}
          icon={
            <MaterialIcon
              size='large'
              name='person'
              color={TYPOGRAPHY.COLOR.BrandBlack}
            />
          }
        />
        <DefaultButton
          style={{
            width: 130,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
          title='categories'
          onClick={() => navigation.navigate('Categories')}
          icon={
            <MaterialIcon
              size='large'
              name='menu'
              color={TYPOGRAPHY.COLOR.BrandBlack}
            />
          }
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <ScrollView horizontal>
          <CategoryCard categoryName='classics' />
          <CategoryCard categoryName='playtation' />
          <CategoryCard categoryName='xbox' />
          <CategoryCard categoryName='nintendo' />
          <CategoryCard categoryName='simulators' />
          <CategoryCard categoryName='crap consoles' />
          <CategoryCard categoryName='boring as ****' />
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
