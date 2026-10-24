import type { PropsWithChildren } from "react";
import { memo, useMemo } from "react";

import type { ControlComponentProps, ControlContextData } from "../../types";
import { ControlContext } from "../../contexts/control.context";

export const ControlProvider = memo(function ControlProvider(
  props: PropsWithChildren<ControlComponentProps>,
) {
  const { children, disabled, error, size, variant, tone = "neutral" } = props;

  const context = useMemo<ControlContextData>(
    () => ({
      disabled,
      error,
      size,
      variant,
      tone,
    }),
    [disabled, error, size, variant, tone],
  );

  return (
    <ControlContext.Provider value={context}>
      {children}
    </ControlContext.Provider>
  );
});
