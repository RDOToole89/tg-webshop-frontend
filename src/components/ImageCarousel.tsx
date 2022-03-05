import React, { useRef } from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import uuid from 'react-native-uuid';
import { GLOBAL } from '../global/styles/global';
import { IMGSTYLES } from '../global/styles/imgStyles';
import { TYPOGRAPHY } from '../global/styles/typography';

interface IImageCarousel {
  images: string[];
  dotColor?: string;
  height?: number;
  width?: number;
}

export const ImageCarousel = ({
  images,
  dotColor,
  height,
  width,
}: IImageCarousel) => {
  const ref = useRef<PagerView>(null);

  return (
    <>
      <View style={{ marginBottom: GLOBAL.SPACING.sm }}>
        <PagerView
          ref={ref}
          style={[styles.viewPager, { minHeight: height, minWidth: width }]}
          initialPage={0}>
          {images.map((image: string, i: number) => {
            return (
              <Image
                key={uuid.v4().toString()}
                source={{ uri: image }}
                style={IMGSTYLES.responsive}
              />
            );
          })}
        </PagerView>
        <View style={styles.dotNavigation}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {images.map((x, i) => {
              return (
                <Pressable
                  key={uuid.v4().toString()}
                  style={dotStyle().outerDot}
                  onPress={() => {
                    ref.current?.setPage(i);
                    // console.log(dotColor);
                  }}>
                  <View style={dotStyle(dotColor).innerDot} />
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    minHeight: 280,
    backgroundColor: TYPOGRAPHY.COLOR.Neutral,
  },
  dotNavigation: {
    height: 40,
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Neutral,
  },
});

const dotStyle = (dotColor = 'rgba(0,0,0,0.60)') =>
  StyleSheet.create({
    outerDot: {
      width: 40,
      height: 40,
      marginHorizontal: 10,
      borderRadius: 200,
      backgroundColor: 'transparent',
    },
    innerDot: {
      width: 15,
      height: 15,
      alignSelf: 'center',
      top: 13,
      borderRadius: 50,
      backgroundColor: dotColor,
    },
  });
