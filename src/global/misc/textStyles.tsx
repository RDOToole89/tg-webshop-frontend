import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';
import { FontSizes, Spacing } from '../../constants/sizes';

export const textStyles = StyleSheet.create({
  headingPrimary: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  headingSecondary: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    color: Colors.primaryWhite,
    marginBottom: Spacing.sm,
    letterSpacing: 3,
  },
  headerMedium: {
    fontFamily: Fonts.primaryBold,
    fontSize: FontSizes.md,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    paddingTop: Spacing.xl,
    marginBottom: Spacing.sm,
  },
  textSmUppercase: {
    fontSize: FontSizes.sm,
    fontFamily: 'ubuntu',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.primaryBlack,
  },
  textXsm: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.sm,
    color: Colors.primaryWhite,
    fontWeight: '500',
    letterSpacing: 1.5,
  },
  textSm: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.sm,
    color: Colors.primaryWhite,
    letterSpacing: 1.5,
  },
  textSmBlack: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.xsm,
    color: Colors.primaryBlack,
    letterSpacing: 1.5,
  },
  textBold: { fontWeight: '600' },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  linkText: {
    fontSize: FontSizes.md,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Colors.primaryWhite,
  },
  linkReturn: {
    textTransform: 'uppercase',
    fontFamily: Fonts.primary,
    letterSpacing: 1.2,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xsm,
    backgroundColor: 'hsla(201, 94%, 88%, .4)',
    fontWeight: '500',
    color: Colors.primaryWhite,
    borderRadius: 10,
  },
});
