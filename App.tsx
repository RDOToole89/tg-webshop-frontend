import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { store } from './src/state/store';

import useCachedResources from './src/hooks/useCachedResources';
import { Home } from './src/screens/Home';
import { Categories } from './src/screens/Categories';
import { Search } from './src/screens/Search';
import { Profile } from './src/screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { Cart } from './src/screens/Cart';
import { Colors } from './src/constants/colors';

export type RootStackParams = {
  Home: undefined;
  Cart: undefined;
  Search: undefined;
  Categories: undefined;
  Profile: undefined;
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export default function App() {
  const isLoaded = useCachedResources();
  console.log(isLoaded);

  return (
    isLoaded && (
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName='Home'
            // passing color options
            screenOptions={{
              // Removes the topheader turn to true to test
              headerShown: false,
              tabBarActiveTintColor: Colors.primaryBlue,
              tabBarInactiveTintColor: 'grey',
            }}>
            <RootStack.Screen
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
                tabBarLabel: 'Home',
              }}
            />
            <RootStack.Screen
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
                tabBarLabel: 'Search',
              }}
            />
            <RootStack.Screen
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

                tabBarLabel: 'Cart',
              }}
            />
            <RootStack.Screen
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
                tabBarLabel: 'Profile',
              }}
            />
            <RootStack.Screen
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
                tabBarLabel: 'Categories',
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  );
}
