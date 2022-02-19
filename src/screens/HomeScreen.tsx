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
import { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import { RootState } from '../state';

import categories from '../../assets/data/categories.json';

export const HomeScreen = () => {
  const { fetchUser } = useActions();
  const user = useSelector((state: RootState) => state.user);
  const { isLoggedIn } = user;

  useEffect(() => {
    // fetchUser();
  }, []);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <ScrollView style={GLOBAL.LAYOUT.defaultContainer}>
      <MessageBanner
        message={
          isLoggedIn
            ? `Welcome back ${user.user?.firstName}`
            : `Welcome to LameStop`
        }
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
        {!isLoggedIn ? (
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
        ) : (
          <DefaultButton
            style={{
              width: 120,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
            title='orders'
            onClick={() => navigation.navigate('Profile')}
            icon={
              <MaterialIcon
                size='large'
                name='pending-actions'
                color={TYPOGRAPHY.COLOR.BrandBlack}
              />
            }
          />
        )}

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
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              categoryName={category.categoryName}
            />
          ))}
        </ScrollView>
      </ScrollView>

      <Text></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: GLOBAL.SPACING.md,
    backgroundColor: '#e5e7eb',
  },
});
