import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/lamestop-logo-transparent.png';

import { Image, Pressable } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { CartScreen } from '../screens/CartScreen';

import { useSelector } from '../hooks/useTypedSelector';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BottomTabParams, RootStackParams } from './navigation';
import { TYPOGRAPHY } from '../global/styles/typography';
import { LoginScreen } from '../screens/LoginScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { GLOBAL } from '../global/styles/global';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { selectCartItemsQuantity } from '../state/selectors/CartSelector';

const navTheme = DefaultTheme;
navTheme.colors.background = '#FFF';

export const Navigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#FFF' },
      }}>
      <Stack.Screen name='Root' component={BottomTabNavigator} />
      <Stack.Screen name='LoginStack' component={LoginStack} />
    </Stack.Navigator>
  );
};

const AuthStack = createStackNavigator();

export const LoginStack = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#fff' },
      }}>
      <AuthStack.Screen
        name='Login'
        component={LoginScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name='chevron-back'
                size={32}
                color={TYPOGRAPHY.COLOR.BrandRed}
              />
            </Pressable>
          ),
        })}
      />
      <AuthStack.Screen name='Signup' component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

export const BottomTabNavigator = () => {
  const cartItems = useSelector(selectCartItemsQuantity);

  return (
    <BottomTab.Navigator
      initialRouteName='Profile'
      screenOptions={({ navigation, route }) => ({
        // tabBarStyle: {
        //   justifyContent: 'center',
        //   alignItems: 'space-evenly',
        //   padding: GLOBAL.SPACING.md,
        // },
        headerRight: () => (
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Image
              style={[IMGSTYLES.headerLogo, { marginRight: GLOBAL.SPACING.md }]}
              source={logo}
            />
          </Pressable>
        ),
        headerShown: false,
        tabBarActiveTintColor: TYPOGRAPHY.COLOR.BrandRed,
        tabBarInactiveTintColor: TYPOGRAPHY.COLOR.BrandBlack,
        tabBarShowLabel: true,
        tabBarLabelStyle: { paddingBottom: 4 },
      })}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation, route }) => ({
          tabBarIcon: () => (
            <Ionicons
              name='md-home-outline'
              size={24}
              color={TYPOGRAPHY.COLOR.BrandBlack}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name='chevron-back'
                size={32}
                color={TYPOGRAPHY.COLOR.BrandRed}
              />
            </Pressable>
          ),
          tabBarIcon: () => (
            <Ionicons
              name='search-outline'
              size={24}
              color={TYPOGRAPHY.COLOR.BrandBlack}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name='Cart'
        component={CartScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name='chevron-back'
                size={32}
                color={TYPOGRAPHY.COLOR.BrandRed}
              />
            </Pressable>
          ),
          tabBarIcon: () => (
            <Ionicons
              name='cart-outline'
              size={24}
              color={TYPOGRAPHY.COLOR.BrandBlack}
            />
          ),
          tabBarBadge: cartItems && cartItems,
        })}
      />
      <BottomTab.Screen
        name='Categories'
        component={CategoriesScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name='chevron-back'
                size={32}
                color={TYPOGRAPHY.COLOR.BrandRed}
              />
            </Pressable>
          ),
          tabBarIcon: () => (
            <Ionicons
              name='menu-outline'
              size={24}
              color={TYPOGRAPHY.COLOR.BrandBlack}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name='chevron-back'
                size={32}
                color={TYPOGRAPHY.COLOR.BrandRed}
              />
            </Pressable>
          ),

          tabBarIcon: () => (
            <Ionicons
              name='person-outline'
              size={24}
              color={TYPOGRAPHY.COLOR.BrandBlack}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};
