import { createContext } from "react";

import type { ColorPickerContextData } from "../types";

export const ColorPickerContext = createContext<
  ColorPickerContextData | undefined
>(undefined);
