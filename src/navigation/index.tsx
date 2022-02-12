import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// import { Home } from './src/screens/FlatExample';
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';
import { Cart } from '../screens/Cart';

import { Colors } from '../constants/colors';
import { useSelector } from '../hooks/useTypedSelector';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabParams } from './navigation';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Root' component={BottomTabNavigator} />
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
        tabBarActiveTintColor: Colors.primaryBlue,
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
              color={Colors.primaryBlue}
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
              color={Colors.primaryBlue}
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
              color={Colors.primaryBlue}
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
              color={Colors.primaryBlue}
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
              color={Colors.primaryBlue}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
