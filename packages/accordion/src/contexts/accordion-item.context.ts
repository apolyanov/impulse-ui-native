import { createContext } from "react";

import type { AccordionItemContextData } from "../types/accordion-context.types";

export const AccordionItemContext = createContext<
  AccordionItemContextData | undefined
>(undefined);
export const AccordionItemProvider = AccordionItemContext.Provider;
