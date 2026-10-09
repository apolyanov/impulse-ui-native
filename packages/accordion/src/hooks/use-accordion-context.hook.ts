import { useContext } from "react";

import type { AccordionContextData } from "../types/accordion-context.types";
import { AccordionContext } from "../contexts";

export function useAccordionContext(): AccordionContextData {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion parts must be used within Accordion.Root");
  }

  return context;
}
