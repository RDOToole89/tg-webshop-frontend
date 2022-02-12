import { Provider } from 'react-redux';
import { store } from './src/state/store';
import { Navigation } from './src/navigation';

import useCachedResources from './src/hooks/useCachedResources';
import { StartupScreen } from './src/screens/StartupScreen';

import { AnimatedAppLoader } from './src/screens/SplashScreen/SplashScreen';

import image from './assets/gamepad.png';

// export default function App() {
//   return (
//     <AnimatedAppLoader image={image}>
//       <MainScreen />
//     </AnimatedAppLoader>
//   );
// }

export default function App() {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  } else {
    return null;
  }
}
