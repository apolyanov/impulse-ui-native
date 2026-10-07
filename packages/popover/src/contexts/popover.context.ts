import { createContext } from "react";

import type { PopoverContextValue } from "../types/popover.types";

export const PopoverContext = createContext<PopoverContextValue | undefined>(
  undefined,
);
