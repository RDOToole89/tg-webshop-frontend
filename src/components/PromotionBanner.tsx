import { View, Text, StyleSheet } from 'react-native';

import { GLOBAL } from '../global/styles/global';
import { TYPOGRAPHY } from '../global/styles/typography';

type PromotionBanner = {
  bannerText: string;
  textSize?: number;
  backgroundColor?: string;
};

type dynamicProp = string | null;

export const PromotionBanner = ({ bannerText }: PromotionBanner) => {
  return (
    <View style={styles().banner}>
      <Text style={GLOBAL.TEXT.Secondary}>{bannerText}</Text>
    </View>
  );
};

const styles = (
  backgroundColor: dynamicProp = null,
  textSize: dynamicProp = null
) =>
  StyleSheet.create({
    banner: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: GLOBAL.SPACING.md,
      fontFamily: 'montserrat',
      backgroundColor: backgroundColor
        ? backgroundColor
        : TYPOGRAPHY.COLOR.Secondary,

      letterSpacing: 0.7,
    },
  });
