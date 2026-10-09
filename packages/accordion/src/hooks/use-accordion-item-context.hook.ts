import { useContext } from "react";

import type { AccordionItemContextData } from "../types/accordion-context.types";
import { AccordionItemContext } from "../contexts";

export function useAccordionItemContext(): AccordionItemContextData {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "Accordion.Trigger, Accordion.Indicator and Accordion.Content must be used within Accordion.Item",
    );
  }

  return context;
}
