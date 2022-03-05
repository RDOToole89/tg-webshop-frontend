import { StyleSheet, Platform, ViewStyle, TextStyle } from 'react-native';

import { TYPOGRAPHY } from './typography';

export const widgetPaddingValue = 16;

const FONT_SIZES = {
  xxxsm: 4,
  xxsm: 6,
  xsm: 10,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 80,
};

const SPACING = {
  xxxsm: 2,
  xxsm: 4,
  xsm: 6,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 26,
  xxl: 30,
  xxxl: 38,
  xxxxl: 64,
};

const LAYOUT = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: TYPOGRAPHY.COLOR.Default,
  },
  container: {
    flex: 1,
  },
  defaultContainer: {
    color: '#fff',
    flex: 1,
    paddingTop: SPACING.xxxl,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageContainer: {
    padding: 16,
  },
  shadow: {
    shadowOpacity: 0.25,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 3 },
    elevation: Platform.OS === 'ios' ? 0 : 3,
  },
});

const ELEMENTS = StyleSheet.create({
  Card: {
    marginBottom: TYPOGRAPHY.ELEMENTS.Card.marginBottom,
  },
  CategoryIcons: {
    alignItems: 'center',
    marginRight: TYPOGRAPHY.ELEMENTS.CategoryIcons.marginRight,
  },
});

const CTA = {
  Style: StyleSheet.create({
    primary: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: TYPOGRAPHY.COLOR.Secondary,
      height: TYPOGRAPHY.BUTTON.primary.height,
      borderWidth: TYPOGRAPHY.BUTTON.primary.borderWidth,
      borderRadius: TYPOGRAPHY.BUTTON.primary.borderRadius,
      paddingVertical: TYPOGRAPHY.BUTTON.primary.paddingVertical,
      paddingHorizontal: TYPOGRAPHY.BUTTON.primary.paddingHorizontal,
    },
    primaryText: {
      color: TYPOGRAPHY.COLOR.Default,
      fontSize: (TYPOGRAPHY.BUTTON.primary.text as TextStyle).fontSize,
    },
    secondary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: TYPOGRAPHY.COLOR.Primary,
      backgroundColor: TYPOGRAPHY.COLOR.Default,
      height: TYPOGRAPHY.BUTTON.secondary.height,
      borderWidth: TYPOGRAPHY.BUTTON.secondary.borderWidth,
      borderRadius: TYPOGRAPHY.BUTTON.secondary.borderRadius,
    },
    secondaryText: {
      textAlign: 'center',
      color: TYPOGRAPHY.COLOR.Primary,
      fontSize: (TYPOGRAPHY.BUTTON.secondary.text as TextStyle).fontSize,
    },
  }),
  TouchableOpacity: {
    default: 0.8,
  },
};

const FONTS = StyleSheet.create({
  h1: {
    ...TYPOGRAPHY.FONT.h1,
    fontFamily: TYPOGRAPHY.FONT.PrimaryBold,
    color: TYPOGRAPHY.COLOR.DefaultSelected,
  },
  body: {
    fontSize: 14,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Default,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Secondary,
  },
});

const TEXT = StyleSheet.create({
  Default: {
    textAlign: 'left',
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: 14,
    color: TYPOGRAPHY.COLOR.Primary,
  },
  Secondary: {
    textAlign: 'left',
    fontFamily: TYPOGRAPHY.FONT.Primary,
    fontSize: 12,
    color: TYPOGRAPHY.COLOR.Default,
  },
  Bold: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: TYPOGRAPHY.FONT.Primary,
    color: TYPOGRAPHY.COLOR.Primary,
  },
});

const TEXT_INPUT = {
  Style: StyleSheet.create({
    Default: {
      color: TYPOGRAPHY.COLOR.DefaultSelected,
      height: TYPOGRAPHY.FONT.input.height,
      borderRadius: TYPOGRAPHY.FONT.input.borderRadius,
      backgroundColor: TYPOGRAPHY.COLOR.Border,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
      fontSize: TYPOGRAPHY.FONT.input.fontSize,
      borderWidth: TYPOGRAPHY.FONT.input.borderWidth,
      paddingHorizontal: TYPOGRAPHY.FONT.input.paddingHorizontal,
    },
    Bold: {
      fontSize: 12,
      textAlign: 'left',
      borderWidth: 1,
      fontFamily: TYPOGRAPHY.FONT.Primary,
      borderColor: TYPOGRAPHY.COLOR.Border,
      color: TYPOGRAPHY.COLOR.Primary,
    },
  }),
};

export const BRAND_HEADER = StyleSheet.create({
  header: {
    color: TYPOGRAPHY.COLOR.DefaultSelected,
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: 'impact',
    letterSpacing: 2,
  },
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 5,
  },
});

const SHADOWS = StyleSheet.create({
  shadowLight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: Platform.OS === 'ios' ? 0 : 4,
  },
  shadowMedium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: Platform.OS === 'ios' ? 0 : 8,
  },
  shadowLarge: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: Platform.OS === 'ios' ? 0 : 8,
  },
  shadowInput: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: Platform.OS === 'ios' ? 0 : 8,
  },
});

const GLOBAL = {
  LAYOUT,
  ELEMENTS,
  CTA,
  FONTS,
  TEXT,
  TEXT_INPUT,
  FONT_SIZES,
  SPACING,
  SHADOWS,
};

export { GLOBAL };
