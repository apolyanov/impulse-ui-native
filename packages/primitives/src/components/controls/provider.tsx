import { createContext, memo, PropsWithChildren, useContext } from "react";

import { ControlContextData } from "../../types";

const ControlContext = createContext<ControlContextData | undefined>(undefined);

export const ControlProvider = memo(function ControlProvider(
  props: PropsWithChildren<ControlContextData>,
) {
  const { children, ...context } = props;

  return (
    <ControlContext.Provider value={context}>
      {children}
    </ControlContext.Provider>
  );
});

export function useControlContext() {
  const context = useContext(ControlContext);

  if (!context) {
    throw new Error("useControlContext must be used within ControlProvider");
  }

  return context;
}
