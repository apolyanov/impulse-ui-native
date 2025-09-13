import {
  BorderSizes,
  FontFamilyMap,
  FontSizes,
  FontWeights,
  NeutralColors,
  Radii,
  Space,
} from '../types';

export const SpaceTokens: Space = {
  none: 0,
  auto: 'auto',
  xxs: 4,
  xs: 8,
  mxs: 12,
  sm: 16,
  msm: 24,
  md: 32,
  lg: 48,
  xl: 64,
  xxl: 96,
};

export const BorderSizeTokens: BorderSizes = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 5,
  xxl: 10,
};

export const RadiiTokens: Radii = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 32,
  xxl: 64,
  xxxl: 128,
  round: 100000,
};

export const FontSizeTokens: FontSizes = {
  xxs: 8,
  xs: 12,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  huge: 48,
  massive: 56,
};

export const NeutralColorTokens: NeutralColors = {
  '0': '#ffffff',
  '1': '#f8f9fa',
  '2': '#f1f3f5',
  '3': '#e9ecef',
  '4': '#dee2e6',
  '5': '#ced4da',
  '6': '#adb5bd',
  '7': '#868e96',
  '8': '#495057',
  '9': '#343a40',
  '10': '#212529',
  '11': '#16191d',
  '12': '#0d0f12',
  '13': '#000000',
};

export const FontWeightTokens: FontWeights = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
  black: '900',
};

export const FontFamilyTokens: FontFamilyMap = {
  thin: 'Montserrat-Thin',
  thinItalic: 'Montserrat-ThinItalic',
  extraLight: 'Montserrat-ExtraLight',
  extraLightItalic: 'Montserrat-ExtraLightItalic',
  light: 'Montserrat-Light',
  lightItalic: 'Montserrat-LightItalic',
  regular: 'Montserrat-Regular',
  italic: 'Montserrat-Italic',
  medium: 'Montserrat-Medium',
  mediumItalic: 'Montserrat-MediumItalic',
  semiBold: 'Montserrat-SemiBold',
  semiBoldItalic: 'Montserrat-SemiBoldItalic',
  bold: 'Montserrat-Bold',
  boldItalic: 'Montserrat-BoldItalic',
  extraBold: 'Montserrat-ExtraBold',
  extraBoldItalic: 'Montserrat-ExtraBoldItalic',
  black: 'Montserrat-Black',
  blackItalic: 'Montserrat-BlackItalic',
};
