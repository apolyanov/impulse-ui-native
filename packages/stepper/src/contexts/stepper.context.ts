import { createContext } from "react";

import type { StepperProviderData } from "../types";

export const StepperContext = createContext<StepperProviderData | undefined>(
  undefined,
);
