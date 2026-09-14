import type { PropsWithChildren } from "react";
import { memo, useMemo } from "react";

import type { OverlayProviderProps } from "../types";
import { OverlayContext } from "../contexts";

export const OverlayProvider = memo(function OverlayProvider(
  props: PropsWithChildren<OverlayProviderProps>,
) {
  const { children, store } = props;

  const value = useMemo(
    () => ({
      store,
    }),
    [store],
  );

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
});
