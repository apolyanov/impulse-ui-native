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
