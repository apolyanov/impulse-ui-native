import { memo, PropsWithChildren, useMemo } from "react";

import { PortalContext } from "../contexts";
import { PortalProviderProps } from "../types";

export const PortalProvider = memo(function PortalProvider(
  props: PropsWithChildren<PortalProviderProps>,
) {
  const { children, store } = props;

  const value = useMemo(
    () => ({
      store,
    }),
    [store],
  );

  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
});
