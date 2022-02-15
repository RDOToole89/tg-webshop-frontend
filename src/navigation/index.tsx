import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Button, Image } from 'react-native';
// import { Home } from './src/screens/FlatExample';
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';
import { Cart } from '../screens/Cart';

import { useSelector } from '../hooks/useTypedSelector';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { BottomTabParams, RootStackParams } from './navigation';
import { TYPOGRAPHY } from '../global/styles/typography';
import { Logo } from '../components/Logo';
import { Login } from '../screens/Login';
import { Signup } from '../screens/Signup';
import BrandLogo from '../../assets/gamepad.png';
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
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#FFF' },
      }}>
      <Stack.Screen name='root' component={BottomTabNavigator} />
      <Stack.Screen name='Login' component={LoginStack} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='Categories' component={Categories} />
    </Stack.Navigator>
  );
};

const AuthStack = createStackNavigator();

export const LoginStack = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#fff' },
      }}>
      <AuthStack.Screen
        name='Login'
        component={Login}
        options={{
          headerTitle: (props) => <Text>Hello</Text>,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title='Info'
              color='#00cc00'
            />
          ),
        }}
      />
      <AuthStack.Screen name='Home' component={Home} />
      <AuthStack.Screen name='Signup' component={Signup} />
    </AuthStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

export const BottomTabNavigator = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: TYPOGRAPHY.COLOR.Secondary,
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name='md-home-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name='search-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name='cart-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
            />
          ),
          tabBarBadge: cartItems && cartItems.length,
        }}
      />
      <BottomTab.Screen
        name='Categories'
        component={Categories}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name='menu-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name='person-outline'
              size={32}
              color={TYPOGRAPHY.COLOR.Secondary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
