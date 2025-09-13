import { TextStyle } from 'react-native';

export type TypographyProps = {
  fontSize?: TextStyle['fontSize'];
  fontFamily?: TextStyle['fontFamily'];
  fontWeight?: TextStyle['fontWeight'];
  fontStyle?: TextStyle['fontStyle'];
  letterSpacing?: TextStyle['letterSpacing'];
  lineHeight?: TextStyle['lineHeight'];
  textAlign?: TextStyle['textAlign'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  textDecorationStyle?: TextStyle['textDecorationStyle'];
  textDecorationColor?: TextStyle['textDecorationColor'];
  textTransform?: TextStyle['textTransform'];
  includeFontPadding?: TextStyle['includeFontPadding']; // Android only
  textAlignVertical?: TextStyle['textAlignVertical']; // Android only
  writingDirection?: TextStyle['writingDirection'];
};

export type TypographyPresetKey =
  | 'Master'
  | 'DisplayLarge'
  | 'DisplayMedium'
  | 'DisplaySmall'
  | 'Title1'
  | 'Title2'
  | 'Title3'
  | 'Title4'
  | 'Title5'
  | 'Title6'
  | 'Subtitle1'
  | 'Subtitle2'
  | 'BodyLarge'
  | 'Body'
  | 'BodySmall'
  | 'Caption'
  | 'Label'
  | 'Overline'
  | 'Helper'
  | 'Code'
  | 'Quote'
  | 'Eyebrow';
