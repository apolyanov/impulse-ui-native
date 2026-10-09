import { memo, useMemo } from "react";

import type { ModalProviderProps } from "../types";
import { ModalContext } from "../contexts/modal.context";
import { useModalLifecycle } from "../hooks/use-modal-lifecycle.hook";

export const ModalProvider = memo(function ModalProvider({
  children,
  layer = 0,
  ...props
}: ModalProviderProps) {
  const lifecycle = useModalLifecycle(props);

  const context = useMemo(() => ({ ...lifecycle, layer }), [lifecycle, layer]);

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
});
