import React, { useMemo, useState } from 'react';
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  LayoutChangeEvent,
  StyleSheet,
  View,
} from 'react-native';

interface ResponsiveImageProps {
  source: ImageSourcePropType | { uri: string };
  srcWidth: number;
  srcHeight: number;
  resizeMode?: ImageResizeMode;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = (props) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const _onViewLayoutChange = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const imageStyles = useMemo(() => {
    const ratio = containerWidth / props.srcWidth;
    return {
      width: containerWidth,
      height: props.srcHeight * ratio,
    };
  }, [containerWidth]);

  return (
    <View style={styles.container} onLayout={_onViewLayoutChange}>
      <Image
        resizeMode={props.resizeMode}
        source={props.source}
        style={imageStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%' },
});
