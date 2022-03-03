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
import { ProductsScreen } from '../screens/ProductsScreen';
import { ProductDetailScreen } from '../screens/ProductDetailScreen';
import { ReviewSrcreen } from '../screens/ReviewScreen';
import { AccountScreen } from '../screens/AccountScreen';
import { AddProductsScreen } from '../screens/AddProductScreen';

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
      screenOptions={({ navigation }) => ({
        headerShown: false,
        navigatorStyle: {
          justifyContent: 'center',
          alignItems: 'space-evenly',
          padding: GLOBAL.SPACING.md,
        },
        headerLeft: () => (
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons
              name='chevron-back'
              size={32}
              color={TYPOGRAPHY.COLOR.BrandRed}
            />
          </Pressable>
        ),
      })}>
      <Stack.Screen name='Root' component={BottomTabNavigator} />
      <Stack.Screen name='LoginStack' component={LoginStack} />
      <Stack.Screen
        options={({ navigation }) => ({
          headerShown: true,
        })}
        name='Review'
        component={ReviewSrcreen}
      />
    </Stack.Navigator>
  );
};

const AuthStack = createStackNavigator();

export const LoginStack = () => {
  return (
    <AuthStack.Navigator
      initialRouteName='Login'
      screenOptions={({ navigation }) => ({
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
      })}>
      <AuthStack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: true }}
      />
      <AuthStack.Screen name='Signup' component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

export const BottomTabNavigator = () => {
  const cartItems = useSelector(selectCartItemsQuantity);
  const currentUser = useSelector((state) => state.user);

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={({ navigation }) => ({
        headerStyle: { borderBottomWidth: 0 },
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
        options={({}) => ({
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
        options={({ navigation }) => ({
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
        options={({ navigation }) => ({
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
          tabBarBadgeStyle: {
            fontSize: 8,
            justifyContent: 'center',
            alignSelf: 'center',
          },
          tabBarBadge: cartItems && cartItems,
        })}
      />
      <BottomTab.Screen
        name='Categories'
        component={CategoriesScreen}
        options={({ navigation }) => ({
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
        options={({ navigation }) => ({
          headerShown: true,
          tabBarButton: !currentUser.user ? () => null : undefined,
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
      <BottomTab.Screen
        name='Products'
        component={ProductsScreen}
        options={({ navigation, route }) => {
          return {
            headerShown: true,

            tabBarButton: () => null,
            title: route.params?.categoryName,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons
                  name='chevron-back'
                  size={32}
                  color={TYPOGRAPHY.COLOR.BrandRed}
                />
              </Pressable>
            ),
          };
        }}
      />
      <BottomTab.Screen
        name='ProductDetails'
        component={ProductDetailScreen}
        options={({ navigation, route }) => {
          return {
            headerShown: true,
            headerStyle: {
              backgroundColor: '#fafafa',
            },
            tabBarButton: () => null,
            //@ts-ignore
            title: route.params?.title,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons
                  name='chevron-back'
                  size={32}
                  color={TYPOGRAPHY.COLOR.BrandRed}
                />
              </Pressable>
            ),
          };
        }}
      />
      <BottomTab.Screen
        name='AccountDetails'
        component={AccountScreen}
        options={({ navigation, route }) => {
          return {
            headerShown: true,
            headerStyle: {
              backgroundColor: '#fafafa',
            },
            tabBarButton: () => null,
            // title: route.params?.title,
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons
                  name='chevron-back'
                  size={32}
                  color={TYPOGRAPHY.COLOR.BrandRed}
                />
              </Pressable>
            ),
          };
        }}
      />
      <BottomTab.Screen
        name='AddProducts'
        component={AddProductsScreen}
        options={({ navigation }) => {
          return {
            headerShown: true,
            headerStyle: {
              backgroundColor: '#fafafa',
            },
            tabBarButton: () => null,
            title: 'Add Products You Awesome Admin!',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons
                  name='chevron-back'
                  size={32}
                  color={TYPOGRAPHY.COLOR.BrandRed}
                />
              </Pressable>
            ),
          };
        }}
      />
    </BottomTab.Navigator>
  );
};
