import { memo, useId, useMemo } from "react";

import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { AccordionItemContextData } from "../contexts";
import type { AccordionItemProps } from "../types";
import { AccordionItemProvider, useAccordionContext } from "../contexts";

export const AccordionItem = memo(function AccordionItem({
  children,
  disabled = false,
  style,
  value,
  ...props
}: AccordionItemProps) {
  const accordion = useAccordionContext();
  const tokens = useComponentsTokens().accordion;
  const reactId = useId().replaceAll(":", "");
  const resolvedDisabled = accordion.disabled || disabled;
  const open = accordion.expandedValues.includes(value);

  const context = useMemo<AccordionItemContextData>(
    () => ({
      contentId: `accordion-content-${reactId}`,
      disabled: resolvedDisabled,
      open,
      triggerId: `accordion-trigger-${reactId}`,
      value,
    }),
    [open, reactId, resolvedDisabled, value],
  );
  const itemStyle = useMemo(
    () => [{ backgroundColor: tokens.backgroundColor }, style],
    [style, tokens.backgroundColor],
  );

  return (
    <AccordionItemProvider value={context}>
      <View {...props} style={itemStyle}>
        {children}
      </View>
    </AccordionItemProvider>
  );
});
