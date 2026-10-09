import { memo, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";

import type { AppTheme } from "@impulse-ui-native/theme";
import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useThemedStyles } from "@impulse-ui-native/theme";

import type {
  AccordionMultipleRootProps,
  AccordionRootProps,
  AccordionSingleRootProps,
} from "../types";
import type { AccordionContextData } from "../types/accordion-context.types";
import { AccordionProvider } from "../contexts";
import { normalizeAccordionValue } from "../utils";

export const AccordionRoot = memo(function AccordionRoot({
  children,
  collapsible = true,
  defaultValue,
  disabled = false,
  onValueChange,
  style,
  type = "single",
  value,
  ...props
}: AccordionRootProps) {
  const styles = useThemedStyles(themedStyles);

  const notifyValueChange = useEventCallback(
    (nextValues: readonly string[]) => {
      if (type === "multiple") {
        (onValueChange as AccordionMultipleRootProps["onValueChange"])?.([
          ...nextValues,
        ]);

        return;
      }

      (onValueChange as AccordionSingleRootProps["onValueChange"])?.(
        nextValues[0],
      );
    },
  );

  const normalizedValue = useMemo(
    () => (value === undefined ? undefined : normalizeAccordionValue(value)),
    [value],
  );
  const normalizedDefaultValue = useMemo(
    () => normalizeAccordionValue(defaultValue),
    [defaultValue],
  );

  const [expandedValues, setExpandedValues] = useControllableState<
    readonly string[]
  >({
    prop: normalizedValue,
    defaultProp: normalizedDefaultValue,
    onChange: notifyValueChange,
  });

  const toggleItem = useCallback(
    (itemValue: string) => {
      setExpandedValues((currentValues) => {
        const isOpen = currentValues.includes(itemValue);

        if (type === "multiple") {
          return isOpen
            ? currentValues.filter((current) => current !== itemValue)
            : [...currentValues, itemValue];
        }

        if (isOpen) {
          return collapsible ? [] : currentValues;
        }

        return [itemValue];
      });
    },
    [collapsible, setExpandedValues, type],
  );

  const context = useMemo<AccordionContextData>(
    () => ({
      disabled,
      expandedValues,
      toggleItem,
    }),
    [disabled, expandedValues, toggleItem],
  );
  const rootStyle = useMemo(() => [styles.root, style], [style, styles.root]);

  return (
    <AccordionProvider value={context}>
      <View {...props} style={rootStyle}>
        {children}
      </View>
    </AccordionProvider>
  );
});

function themedStyles(theme: AppTheme) {
  const accordionTokens = theme.components.accordion;

  return StyleSheet.create({
    root: {
      backgroundColor: accordionTokens.dividerColor,
      borderColor: accordionTokens.borderColor,
      borderRadius: accordionTokens.borderRadius,
      borderWidth: accordionTokens.borderWidth,
      gap: accordionTokens.dividerWidth,
      overflow: "hidden",
    },
  });
}
