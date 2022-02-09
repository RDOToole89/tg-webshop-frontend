import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { store } from './src/state/store';

import useCachedResources from './src/hooks/useCachedResources';
// import { Home } from './src/screens/FlatExample';
import { Home } from './src/screens/Home';
import { Categories } from './src/screens/Categories';
import { Search } from './src/screens/Search';
import { Profile } from './src/screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { Cart } from './src/screens/Cart';
import { Colors } from './src/constants/colors';

export type TabParams = {
  Home: undefined;
  Cart: undefined;
  Search: undefined;
  Categories: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

export default function App() {
  const isLoaded = useCachedResources();

  return (
    isLoaded && (
      <Provider store={store}>
        <NavigationContainer>
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
                tabBarBadge: 3,
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
        </NavigationContainer>
      </Provider>
    )
  );
}
