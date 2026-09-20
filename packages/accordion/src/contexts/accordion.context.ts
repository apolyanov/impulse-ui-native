import type { ComponentRef, RefObject } from "react";
import { createContext, useContext } from "react";

import type { Pressable } from "@impulse-ui-native/primitives";

import type { AccordionFocusDirection } from "../utils";

interface AccordionTriggerRegistration {
  disabled: boolean;
  ref: RefObject<ComponentRef<typeof Pressable> | null>;
  value: string;
}

export interface AccordionContextData {
  disabled: boolean;
  expandedValues: readonly string[];
  focusTrigger: (value: string, direction: AccordionFocusDirection) => void;
  registerTrigger: (registration: AccordionTriggerRegistration) => () => void;
  toggleItem: (value: string) => void;
}

export interface AccordionItemContextData {
  contentId: string;
  disabled: boolean;
  open: boolean;
  triggerId: string;
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
