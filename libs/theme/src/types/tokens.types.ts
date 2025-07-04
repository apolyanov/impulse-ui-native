import { DimensionValue } from 'react-native';

export type SpaceSizesKeys =
  | 'none'
  | 'auto'
  | 'xxs'
  | 'xs'
  | 'mxs'
  | 'sm'
  | 'msm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl';
export type Space = Record<SpaceSizesKeys, DimensionValue>;

export type FontSizesKeys =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'huge'
  | 'massive';
export type FontSizes = Record<FontSizesKeys, number>;

export type LineHeightKeys = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type LineHeights = Record<LineHeightKeys, string>;

export type FontWeightKey =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';
export type FontWeights = Record<
  FontWeightKey,
  '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
>;

export type LetterSpacingKey =
  | 'tightest'
  | 'tighter'
  | 'tight'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest'
  | 'ultraWide';
export type LetterSpacings = Record<LetterSpacingKey, number>;

export type BorderSizeKey = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type BorderSizes = Record<BorderSizeKey, number>;

export type RadiusKey = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'round';
export type Radii = Record<RadiusKey, number>;

export type RadiusDrawnKey =
  | 'drawn1'
  | 'drawn2'
  | 'drawn3'
  | 'drawn4'
  | 'drawn5'
  | 'drawn6';
export type RadiiDrawn = Record<RadiusDrawnKey, string>;

export type RadiusBlobKey = 'blob1' | 'blob2' | 'blob3' | 'blob4' | 'blob5';
export type RadiiBlob = Record<RadiusBlobKey, string>;

export type RadiusConditionalKey =
  | 'conditional1'
  | 'conditional2'
  | 'conditional3'
  | 'conditional4'
  | 'conditional5'
  | 'conditional6';
export type RadiiConditional = Record<RadiusConditionalKey, string>;
