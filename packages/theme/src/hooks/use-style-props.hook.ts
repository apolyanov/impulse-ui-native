import { useMemo } from "react";

import { StylePropsSet } from "../constants";
import { extractStyleProps } from "../utils";

export function useStyleProps<Props extends object>(props: Props) {
  // The fixed key order compares actual values without a serialized cache key.
  const values = Array.from(StylePropsSet, (key) => props[key as keyof Props]);

  return useMemo(() => extractStyleProps(props), values);
}
