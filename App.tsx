import { Provider } from 'react-redux';
import { store } from './src/state/store';
import { Navigation } from './src/navigation';

import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const isLoaded = useCachedResources();

  return (
    isLoaded && (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  );
}
