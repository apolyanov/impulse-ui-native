import { createContext } from "react";

import type { ToastContextValue } from "../types";

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined,
);
