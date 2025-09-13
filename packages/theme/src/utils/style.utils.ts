import { StylePropsSet } from '../constants';
import { StylePropKey, StyleProps } from '../types';

const isStylePropKey = (k: string): k is StylePropKey =>
  StylePropsSet.has(k as StylePropKey);

export const extractStyleProps = <Props extends object>(
  props: Props
): StyleProps => {
  const style: StyleProps = {};
  for (const k in props) {
    if (isStylePropKey(k) && props[k] !== undefined) {
      style[k] = props[k] as any;
    }
  }
  return style;
};

export const createStyleKey = <Props extends object>(props: Props) => {
  let key = '';
  for (const k in props) {
    if (isStylePropKey(k)) {
      key += String(props[k as keyof Props]);
    }
  }
  return key;
};
