import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/state/store';
import useCachedResources from './src/hooks/useCachedResources';
import { TabNavigator } from './src/navigators/TabNavigator';

export default function App() {
  const isLoaded = useCachedResources();

  return (
    isLoaded && (
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    )
  );
}
