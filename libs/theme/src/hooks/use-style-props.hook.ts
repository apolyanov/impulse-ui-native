import { useMemo } from 'react';
import { createStyleKey, extractStyleProps } from '../utils';

export function useStyleProps<Props extends object>(props: Props) {
  const key = createStyleKey(props);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => extractStyleProps(props), [key]);
}
