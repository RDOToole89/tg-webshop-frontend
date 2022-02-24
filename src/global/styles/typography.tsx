const COLOR = {
  // CTA
  Primary: '#495056',
  Secondary: '#4c78e2',
  Tertiary: '#87ceeb',
  Default: '#FFFFFF',
  Neutral: '#fafafa',
  DefaultSelected: '#222222',
  PrimaryGrey: '#f0f0f0',
  SecondaryGrey: '#E5E7EB',
  TertiaryGrey: '#b7c5c6',
  BrandRed: '#ee2a28',
  BrandBlack: '#212322',
  Border: '#E7E7E8',
  Success: '#2BC480',
  Warning: '#D91E5B',

  // Status Bar
  StatusBar: 'transparent',
};

const FONT = {
  Primary: 'open-sans',
  PrimaryMedium: 'open-sans-medium',
  PrimaryBold: 'open-sans-bold',
  default: {
    fontFamily: 'open-sans',
    fontSize: 14,
  },
  body: {
    fontFamily: 'open-sans',
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 8,
  },
  h1: {
    fontFamily: 'open-sans',
    fontSize: 26,
    marginBottom: 10,
  },
  h2: {
    fontFamily: 'open-sans',
    fontSize: 20,
    marginBottom: 10,
  },
  h3: {
    fontFamily: 'open-sans',
    fontSize: 14,
    marginBottom: 10,
  },
  h4: {
    fontFamily: 'open-sans',
    fontSize: 12,
    marginBottom: 10,
  },
  subtitle: {
    color: COLOR.DefaultSelected,
    fontFamily: 'open-sans',
    fontSize: 12,
    letterSpacing: 0.2,
    marginBottom: 8,
  },
  input: {
    height: 36,
    fontSize: 14,
    borderColor: '#b7c5c6',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
};

const BUTTON = {
  radius: 5,
  primary: {
    height: 48,
    borderWidth: 0,
    borderRadius: 0,
    paddingVertical: 6,
    justifyContent: 'center',
    paddingHorizontal: 15,
    text: {
      fontSize: 14,
    },
  },
  secondary: {
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
    text: {
      fontSize: 14,
    },
  },
};

const ELEMENTS = {
  CategoryIcons: { marginRight: 20 },
  Card: { marginBottom: 30 },
};

const TYPOGRAPHY = {
  COLOR,
  FONT,
  BUTTON,
  ELEMENTS,
};

export { TYPOGRAPHY };
