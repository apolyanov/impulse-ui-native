import {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import { ThemeContextData } from '../types';
import { DeepPartial } from '@impulse-ui-native/types';
import { merge } from '@impulse-ui-native/utils';
import { DarkTheme, LightTheme } from '../theme';

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export const ThemeProvider = memo(function ThemeProvider(
  props: PropsWithChildren<DeepPartial<ThemeContextData>>,
) {
  const context = useMemo<ThemeContextData>(() => {
    const base: ThemeContextData = {
      light: { theme: LightTheme },
      dark: { theme: DarkTheme },
    };

    let override: DeepPartial<ThemeContextData> | undefined = undefined;

    if (props.light || props.dark) {
      override = { dark: props.dark, light: props.light };
    }

    return merge(base, override);
  }, [props.dark, props.light]);

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  );
});

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used withing a ThemeProvider');
  }

  return context;
}
