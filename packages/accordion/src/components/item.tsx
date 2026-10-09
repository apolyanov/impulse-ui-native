import { memo, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type { AccordionItemProps } from "../types";
import type { AccordionItemContextData } from "../types/accordion-context.types";
import { AccordionItemProvider } from "../contexts";
import { useAccordionContext } from "../hooks";

export const AccordionItem = memo(function AccordionItem({
  children,
  disabled = false,
  style,
  value,
  ...props
}: AccordionItemProps) {
  const accordion = useAccordionContext();

  const styles = useThemedStyles(themedStyles);

  const resolvedDisabled = accordion.disabled || disabled;
  const open = accordion.expandedValues.includes(value);

  const context = useMemo<AccordionItemContextData>(
    () => ({
      disabled: resolvedDisabled,
      open,
      value,
    }),
    [open, resolvedDisabled, value],
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
