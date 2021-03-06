import { Provider } from 'react-redux';
import { Navigation } from './src/navigation';
import { store } from './src/state/store';

import useCachedResources from './src/hooks/useCachedResources';
import { StartupScreen } from './src/screens/StartupScreen';

import { AnimatedAppLoader } from './src/screens/SplashScreen/SplashScreen';

import { useEffect } from 'react';
import { LogBox } from 'react-native';
import image from './assets/gamepad.png';
export const ViewPropTypes = { style: null };

const images = [image];

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    ]);

    LogBox.ignoreLogs([
      'AsyncStorage has been extracted from react-native core and will be removed in a future release',
    ]);
  });

  return (
    <AnimatedAppLoader images={images}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

const MainScreen = () => {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  } else {
    return <StartupScreen />;
  }
};
