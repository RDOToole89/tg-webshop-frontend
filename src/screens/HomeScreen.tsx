import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TopBar } from '../components/TopBar';
import { PromotionBanner } from '../components/PromotionBanner';
import { GLOBAL } from '../global/styles/global';
import { SearchBar } from '../components/SearchBar';
import image from '../../assets/lame-banner.png';
import imageDeal from '../../assets/fake-add.png';
import weekDeal from '../../assets/week-deal-dark.png';
import trending from '../../assets/trending.png';

import { DefaultButton } from '../global/elements/buttons';
import { DealBanner } from '../components/DealBanner';
import { MessageBanner } from '../components/MessageBanner';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navigation/navigation';
import { MaterialIcon } from '../global/elements/MaterialIcon';
import { TYPOGRAPHY } from '../global/styles/typography';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import { RootState } from '../state';

import categories from '../../assets/data/categories.json';
import products from '../../assets/data/products.json';

import { HorizontalScrollView } from '../components/HorizontalScrollView';
import { DealCountDown } from '../components/DealCountDown';
import { HorizontalRule } from '../global/elements/HorizontalRule';
import { IconGenerator } from '../components/IconGenerator';

export const HomeScreen = () => {
  const { fetchUser } = useActions();
  const userState = useSelector((state: RootState) => state.user);
  const { isLoggedIn, user } = userState;

  // console.log('HOMESCREEN USERSTATE', userState);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <ScrollView style={[GLOBAL.LAYOUT.defaultContainer, { zIndex: 9 }]}>
      <MessageBanner
        message={isLoggedIn ? `Welcome back ${`user`}` : `Welcome to LameStop`}
        delay={2000}
      />
      <TopBar style={{ backgroundColor: '#fff' }} iconsActive={false} />
      <View style={{ paddingVertical: GLOBAL.SPACING.md }}>
        <PromotionBanner bannerText='SPECIAL OFFER: pay EXTRA on orders over 100$' />
      </View>

      <SearchBar onClick={() => navigation.navigate('Search')} />
      <View style={{ paddingVertical: GLOBAL.SPACING.lg }}>
        <DealBanner source={image} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isLoggedIn ? (
          <DefaultButton
            style={styles.homeButton}
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
            style={styles.homeButton}
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
          style={styles.homeButton}
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
      <HorizontalRule shadow={false} ruleWidth={1} color='rgba(0,0,0,0.1)' />
      <DealCountDown title='lamedeal' />

      <ImageBackground
        source={imageDeal}
        resizeMode='contain'
        style={{
          height: 200,
        }}
      />

      <HorizontalScrollView
        dataArray={categories}
        title='Categories'
        routeString='Categories'
        style={{
          marginVertical: GLOBAL.SPACING.xxxl,
          paddingVertical: GLOBAL.SPACING.xl,
        }}
      />

      <ImageBackground
        source={weekDeal}
        resizeMode='contain'
        style={{
          height: 200,
        }}
      />

      <HorizontalScrollView
        dataArray={products}
        title='Recently viewed'
        routeString='Categories'
        style={{
          marginVertical: GLOBAL.SPACING.xxxl,
          paddingVertical: GLOBAL.SPACING.xl,
        }}
      />
      <ImageBackground
        source={trending}
        resizeMode='contain'
        style={{
          height: 200,
          marginBottom: GLOBAL.SPACING.xxxxl,
        }}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          backgroundColor: TYPOGRAPHY.COLOR.BrandRed,
          paddingVertical: GLOBAL.SPACING.lg,
          paddingHorizontal: GLOBAL.SPACING.lg,
        }}>
        <Text style={[TYPOGRAPHY.FONT.h1, { color: TYPOGRAPHY.COLOR.Default }]}>
          Service & contact
        </Text>
        <View style={GLOBAL.LAYOUT.rowCenter}>
          <MaterialIcon
            size='extraLarge'
            name='phone'
            color={TYPOGRAPHY.COLOR.BrandBlack}
          />

          <Text
            style={[
              TYPOGRAPHY.FONT.subtitle,
              {
                color: TYPOGRAPHY.COLOR.Default,
                marginLeft: GLOBAL.SPACING.sm,
              },
            ]}>
            Call us between: 04.34 - 05.15 / 7 days a week
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          paddingVertical: GLOBAL.SPACING.sm,
          marginVertical: GLOBAL.SPACING.xl,
        }}>
        <Text
          style={{
            textAlign: 'center',
            letterSpacing: 1,
            fontFamily: TYPOGRAPHY.FONT.PrimaryMedium,
          }}>
          Want to follow us?
        </Text>

        <IconGenerator
          onClick={() => console.log('click')}
          iconDescArray={[
            { name: 'logo-facebook', size: 24, color: 'black' },
            { name: 'logo-instagram', size: 24, color: 'black' },
            { name: 'logo-twitter', size: 24, color: 'black' },
            { name: 'logo-linkedin', size: 24, color: 'black' },
          ]}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: GLOBAL.SPACING.md,
    backgroundColor: '#e5e7eb',
    zIndex: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: GLOBAL.SPACING.md,
    paddingBottom: GLOBAL.SPACING.xxxl,
  },
  homeButton: {
    width: 160,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
