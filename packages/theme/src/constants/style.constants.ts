import { StyleProps } from '../types';

export const StylePropsSet = new Set<keyof StyleProps>([
  // Spacing
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginHorizontal',
  'marginVertical',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingHorizontal',
  'paddingVertical',

  // Appearance
  'color',
  'backgroundColor',
  'opacity',
  'borderRadius',
  'borderColor',
  'borderWidth',
  'borderStyle',
  'shadowColor',
  'shadowOpacity',
  'shadowRadius',
  'shadowOffset',
  'elevation',

  // Typography (TextStyle)
  'fontSize',
  'fontFamily',
  'fontWeight',
  'fontStyle',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'textDecorationLine',
  'textDecorationStyle',
  'textDecorationColor',
  'textTransform',
  'includeFontPadding',
  'textAlignVertical',
  'writingDirection',
]);
