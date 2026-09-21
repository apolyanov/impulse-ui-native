import { memo, useId, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

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
  const reactId = useId().replaceAll(":", "");
  const styles = useThemedStyles(themedStyles);
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
  const itemStyle = useMemo(() => [styles.item, style], [style, styles.item]);

  return (
    <AccordionItemProvider value={context}>
      <View {...props} style={itemStyle}>
        {children}
      </View>
    </AccordionItemProvider>
  );
});

function themedStyles(theme: AppTheme) {
  return StyleSheet.create({
    item: {
      backgroundColor: theme.components.accordion.backgroundColor,
    },
  });
}
