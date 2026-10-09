import type { PropsWithChildren } from "react";
import { memo, useMemo } from "react";

import type { ControlContextData } from "../../types";
import { ControlContext } from "../../contexts/control.context";

export const ControlProvider = memo(function ControlProvider(
  props: PropsWithChildren<ControlContextData>,
) {
  const { children, disabled, error, size, variant } = props;

  const context = useMemo<ControlContextData>(
    () => ({ disabled, error, size, variant }),
    [disabled, error, size, variant],
  );

  return (
    <ControlContext.Provider value={context}>
      {children}
    </ControlContext.Provider>
  );
});
