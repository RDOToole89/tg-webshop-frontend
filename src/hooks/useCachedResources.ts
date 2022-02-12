import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        await Font.loadAsync({
          ubuntu: require('../../assets/fonts/Ubuntu-Regular.ttf'),
          'ubuntu-bold': require('../../assets/fonts/Ubuntu-Bold.ttf'),
          impact: require('../../assets/fonts/impact/impact.ttf'),
          impacted: require('../../assets/fonts/impact/Impacted.ttf'),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
