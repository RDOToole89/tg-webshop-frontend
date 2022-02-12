import * as Font from 'expo-font';
import { useState } from 'react';

export const useCustomFonts = async () => {
  const [loading, setLoading] = useState(false);

  try {
    await Font.loadAsync({
      impact: require('../../assets/fonts/impact/impact.ttf'),
      impacted: require('../../assets/fonts/impact/Impacted.ttf'),
    });

    setLoading(true);
  } catch (error) {
    console.warn(error);
    setLoading(false);
  }

  return loading;
};
