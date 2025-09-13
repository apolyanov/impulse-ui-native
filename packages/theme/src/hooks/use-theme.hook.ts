import { useColorScheme } from 'react-native';
import { AppTheme, DarkTheme, LightTheme } from '../theme';

export function useTheme(): AppTheme {
  const scheme = useColorScheme();

  return scheme === 'dark' ? DarkTheme : LightTheme;
}
