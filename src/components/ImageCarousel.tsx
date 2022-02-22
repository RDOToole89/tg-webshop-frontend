import React, { useRef } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import PagerView from 'react-native-pager-view';
import { ResponsiveImage } from '../global/elements/ResponsiveImage';

type ImageCarousel = {
  images: string[];
  dotColor: any;
};

export const ImageCarousel = ({ images, dotColor }: ImageCarousel) => {
  // How to type this???!
  const page = useRef<any>(PagerView);

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <PagerView ref={page} style={styles.viewPager} initialPage={0}>
        {images.map((image: string, i: number) => {
          return (
            <ResponsiveImage
              key={i}
              srcWidth={400}
              srcHeight={400}
              resizeMode={'contain'}
              source={{ uri: image }}
            />
          );
        })}
      </PagerView>
      <View style={styles.dotNavigation}>
        {images.map((x, i) => {
          return (
            <Pressable
              key={x}
              style={dotStyle().outerDot}
              onPress={() => page.current.setPage(i)}>
              <View style={dotStyle(dotColor).innerDot} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    position: 'relative',
    backgroundColor: 'transparent',
    height: '55%',
  },
  page: {
    height: 150,
    width: 150,
  },
  dotNavigation: {
    position: 'absolute',
    flexDirection: 'row',
    top: '50%',
    left: '15%',
    height: 50,
    width: '70%',
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
      width: 20,
      height: 20,
      alignSelf: 'center',
      margin: 'auto',
      top: '30%',
      borderRadius: 50,
      backgroundColor: dotColor,
    },
  });
