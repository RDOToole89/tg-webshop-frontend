import React, { useRef } from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';
import uuid from 'react-native-uuid';

type ImageCarousel = {
  images: string[];
  dotColor?: string;
  height: number;
  width: number;
};

export const ImageCarousel = ({
  images,
  dotColor,
  height,
  width,
}: ImageCarousel) => {
  // How to type this???!
  const page = useRef<any>(PagerView);

  return (
    <>
      <View style={{ marginBottom: 30 }}>
        <PagerView ref={page} style={styles.viewPager} initialPage={0}>
          {images.map((image: string, i: number) => {
            return (
              <Image
                source={{ uri: image }}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            );
          })}
        </PagerView>
        <View style={styles.dotNavigation}>
          {images.map((x, i) => {
            return (
              <Pressable
                key={uuid.v4().toString()}
                style={dotStyle().outerDot}
                onPress={() => page.current.setPage(i)}>
                <View style={dotStyle(dotColor).innerDot} />
              </Pressable>
            );
          })}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    position: 'relative',
    height: 300,
    backgroundColor: 'transparent',
  },
  dotNavigation: {
    position: 'absolute',
    flexDirection: 'row',
    top: '100%',
    left: '10%',
    height: 50,
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

const dotStyle = (dotColor = 'rgba(0,0,0,0.75)') =>
  StyleSheet.create({
    outerDot: {
      position: 'relative',
      width: 50,
      height: 50,
      borderRadius: 200,
      backgroundColor: 'transparent',
      zIndex: 1,
    },
    innerDot: {
      position: 'absolute',
      width: 15,
      height: 15,
      alignSelf: 'center',
      margin: 'auto',
      top: '30%',
      borderRadius: 50,
      backgroundColor: dotColor,
    },
  });
