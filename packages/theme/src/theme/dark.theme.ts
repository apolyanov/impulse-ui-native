import { AppTheme } from './light.theme';
import {
  BorderSizeTokens,
  FontFamilyTokens,
  FontSizeTokens,
  NeutralColorTokens,
  RadiiTokens,
  SpaceTokens,
} from './tokens.theme';

export const DarkTheme: AppTheme = {
  colors: {
    primary: '#f55d6b',
    secondary: '#f55d6b',
    neutral: NeutralColorTokens,
    white: NeutralColorTokens['0'],
    black: NeutralColorTokens['13'],
    error: '#c92a2a',
    warning: '#e67700',
    success: '#7a9908',
    info: '#1864ab',
    text: {
      primary: NeutralColorTokens['11'],
      secondary: NeutralColorTokens['10'],
    },
    background: {
      primary: NeutralColorTokens['2'],
      secondary: NeutralColorTokens['0'],
    },
  },
  spacing: SpaceTokens,
  radii: RadiiTokens,
  borderSize: BorderSizeTokens,
  fontFamily: FontFamilyTokens,
  fontSize: FontSizeTokens,
};
