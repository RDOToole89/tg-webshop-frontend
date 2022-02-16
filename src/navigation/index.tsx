import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Button, Image, Pressable } from 'react-native';
// import { Home } from './src/screens/FlatExample';
import { HomeScreen } from '../screens/HomeScreen';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { CartScreen } from '../screens/CartScreen';

import { useSelector } from '../hooks/useTypedSelector';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BottomTabParams, RootStackParams } from './navigation';
import { TYPOGRAPHY } from '../global/styles/typography';
import { Logo } from '../components/Logo';
import { LoginScreen } from '../screens/LoginScreen';
import { SignupScreen } from '../screens/SignupScreen';
import BrandLogo from '../../assets/gamepad.png';
import { GLOBAL } from '../global/styles/global';
// import BrandLogo from '../../assets/lamestop-logo.png';

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
                color={TYPOGRAPHY.COLOR.Secondary}
              />
            </Pressable>
          ),

          headerRight: () => (
            <Pressable onPress={() => console.log('go to home!')}>
              <Ionicons
                style={{ padding: GLOBAL.SPACING.md }}
                name='md-home-outline'
                size={24}
                color={TYPOGRAPHY.COLOR.BrandBlack}
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
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={({ navigation, route }) => ({
        headerShown: false,
        tabBarActiveTintColor: TYPOGRAPHY.COLOR.Secondary,
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
      })}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation, route }) => ({
          tabBarIcon: () => (
            <Ionicons
              name='md-home-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
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
                color={TYPOGRAPHY.COLOR.Secondary}
              />
            </Pressable>
          ),
          tabBarIcon: () => (
            <Ionicons
              name='search-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
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
                color={TYPOGRAPHY.COLOR.Secondary}
              />
            </Pressable>
          ),
          tabBarIcon: () => (
            <Ionicons
              name='cart-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
            />
          ),
          tabBarBadge: cartItems && cartItems.length,
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
                color={TYPOGRAPHY.COLOR.Secondary}
              />
            </Pressable>
          ),
          tabBarIcon: () => (
            <Ionicons
              name='menu-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
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
                color={TYPOGRAPHY.COLOR.Secondary}
              />
            </Pressable>
          ),
          tabBarIcon: () => (
            <Ionicons
              name='person-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
            />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};
