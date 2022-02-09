import { Home } from '../screens/Home';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Home } from './src/screens/FlatExample';
// import { Home } from '/src/screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { Cart } from '../screens/Cart';
import { Colors } from '../constants/colors';
import { useSelector } from '../hooks/useTypedSelector';

export type TabParams = {
  Home: undefined;
  Cart: undefined;
  Search: undefined;
  Categories: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

export const TabNavigator = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryBlue,
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
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
    </Tab.Navigator>
  );
};
