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

type dynamicProp = string | null;

export const MessageBanner = ({ message, delay }: Alert) => {
  const [messageActive, setMessageActive] = useState(true);

  setTimeout(() => {
    setMessageActive(false);
  }, delay);

  return messageActive ? (
    <View style={styles().banner}>
      <Text style={GLOBAL.TEXT.Secondary}>{message}</Text>
    </View>
  ) : null;
};

const styles = (
  backgroundColor: dynamicProp = null,
  textSize: dynamicProp = null
) =>
  StyleSheet.create({
    banner: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: GLOBAL.FONT_SIZES.md,
      fontFamily: 'open-sans',
      textTransform: 'uppercase',
      backgroundColor: backgroundColor
        ? backgroundColor
        : TYPOGRAPHY.COLOR.DefaultSelected,

      letterSpacing: 0.7,
    },
  });
