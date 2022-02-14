import { Provider } from 'react-redux';
import { store } from './src/state/store';
import { Navigation } from './src/navigation';

import useCachedResources from './src/hooks/useCachedResources';
import { StartupScreen } from './src/screens/StartupScreen';

import { AnimatedAppLoader } from './src/screens/SplashScreen/SplashScreen';

import image from './assets/gamepad.png';
import { Login } from './src/screens/Login';

const images = [image];

export default function App() {
  console.log(images);

  return (
    <Login />

    // <AnimatedAppLoader images={images}>
    //   <MainScreen />
    // </AnimatedAppLoader>
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
