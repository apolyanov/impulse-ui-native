import { createContext, useContext } from "react";

export interface AccordionContextData {
  disabled: boolean;
  expandedValues: readonly string[];
  toggleItem: (value: string) => void;
}

export interface AccordionItemContextData {
  disabled: boolean;
  open: boolean;
  value: string;
}

const AccordionContext = createContext<AccordionContextData | undefined>(
  undefined,
);
const AccordionItemContext = createContext<
  AccordionItemContextData | undefined
>(undefined);

export const AccordionProvider = AccordionContext.Provider;
export const AccordionItemProvider = AccordionItemContext.Provider;

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("Accordion parts must be used within Accordion.Root");
  }

  return context;
}

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "Accordion.Trigger and Accordion.Content must be used within Accordion.Item",
    );
  }

  return context;
}
