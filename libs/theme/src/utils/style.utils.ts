import { StylePropsSet } from '../constants';
import { StyleProps } from '../types';

export function extractStyleProps<Props extends object>(
  props: Props,
): StyleProps {
  const style: StyleProps = {};

  for (const key in props) {
    if (StylePropsSet.has(key) && props[key] !== undefined) {
      style[key as keyof StyleProps] = props[key] as any;
    }
  }

  return style;
}

export function createStyleKey<Props extends object>(props: Props) {
  let key = '';

  for (const property in props) {
    if (StylePropsSet.has(property)) {
      key += String(props[property as keyof Props]);
    }
  }

  return key;
}
