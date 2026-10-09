import { useContext } from "react";

import { ModalContext } from "../contexts/modal.context";

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal components must be rendered inside Modal.Provider");
  }

  return context;
}
