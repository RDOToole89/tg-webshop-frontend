import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useMemo, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';

import Constants from 'expo-constants';
import { Animated, StyleSheet, View } from 'react-native';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export function AnimatedAppLoader({ children, images }: any) {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    async function loadAssetsAsync(images: any) {
      try {
        return await Promise.all(
          images.map((image: any) => Asset.fromModule(image).downloadAsync())
        );
      } catch (error) {
        console.log(error);
      }
    }
    loadAssetsAsync(images).then(() => setSplashReady(true));
  }, []);

  if (!isSplashReady) {
    return (
      <AppLoading
        // Instruct SplashScreen not to hide yet, we want to do this manually
        autoHideSplash={false}
      />
    );
  }

  return (
    <AnimatedSplashScreen image={images[0]}>{children}</AnimatedSplashScreen>
  );
}

export function AnimatedSplashScreen({ children, image }: any) {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents='none'
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants?.manifest?.splash?.backgroundColor,
              opacity: animation,
            },
          ]}>
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: Constants?.manifest?.splash?.resizeMode || 'contain',
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}
