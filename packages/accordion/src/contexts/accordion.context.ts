import { createContext } from "react";

import type { AccordionContextData } from "../types/accordion-context.types";

export const AccordionContext = createContext<AccordionContextData | undefined>(
  undefined,
);
export const AccordionProvider = AccordionContext.Provider;
