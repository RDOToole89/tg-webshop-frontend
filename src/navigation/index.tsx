import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// import { Home } from './src/screens/FlatExample';
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';
import { Cart } from '../screens/Cart';

import { useSelector } from '../hooks/useTypedSelector';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabParams, RootStackParams } from './navigation';
import { TYPOGRAPHY } from '../global/styles/typography';
import { Login } from '../screens/Login';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='root' component={BottomTabNavigator} />
      <Stack.Screen name='Categories' component={Categories} />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
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
