//@ts-nocheck
import { Provider } from 'react-redux';
import { store } from './src/state/store';
import { Navigation } from './src/navigation';

import useCachedResources from './src/hooks/useCachedResources';
import { StartupScreen } from './src/screens/StartupScreen';

import { AnimatedAppLoader } from './src/screens/SplashScreen/SplashScreen';

import image from './assets/gamepad.png';
import { LoginScreen } from './src/screens/LoginScreen';
import { CategoriesScreen } from './src/screens/CategoriesScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { useEffect } from 'react';
import { useActions } from './src/hooks/useActions';

const images = [image];

export default function App() {
  return (
    <AnimatedAppLoader images={images}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

const MainScreen = () => {
  const isLoaded = useCachedResources();

  if (true) {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  } else {
    return <StartupScreen />;
  }
};
