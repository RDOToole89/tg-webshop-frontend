import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

type Alert = {
  message: string;
  delay: number;
  textSize?: number;
  backgroundColor?: string;
};

type textProp = number | null;
type backgroundColorProp = string | null;

export const MessageBanner = ({
  message,
  delay,
  textSize,
  backgroundColor,
}: Alert) => {
  const [messageActive, setMessageActive] = useState(true);

  setTimeout(() => {
    setMessageActive(false);
  }, delay);

  console.log(backgroundColor);

  return messageActive ? (
    <View style={styles(backgroundColor, textSize).banner}>
      <Text style={GLOBAL.TEXT.Secondary}>{message}</Text>
    </View>
  ) : null;
};

const styles = (
  backgroundColor: backgroundColorProp = null,
  textSize: textProp = null
) =>
  StyleSheet.create({
    banner: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: GLOBAL.FONT_SIZES.md,
      fontFamily: 'open-sans',
      fontSize: textSize ? textSize : GLOBAL.FONT_SIZES.sm,
      textTransform: 'uppercase',
      backgroundColor: backgroundColor
        ? backgroundColor
        : TYPOGRAPHY.COLOR.DefaultSelected,

      letterSpacing: 0.7,
    },
  });
