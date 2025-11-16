import { useMemo } from 'react';

import { createStyleKey, extractStyleProps } from '../utils';

export function useStyleProps<Props extends object>(props: Props) {
  const key = createStyleKey(props);

  return useMemo(() => extractStyleProps(props), [key]);
}
