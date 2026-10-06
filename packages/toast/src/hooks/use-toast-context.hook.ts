import { useContext } from "react";

import { ToastContext } from "../contexts/toast.context";

export function useToastContext() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("Toast children must be rendered inside Toast.Root");
  }

  return context;
}
