import { createContext } from "react";

import type { ModalContextValue } from "../types";

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined,
);
