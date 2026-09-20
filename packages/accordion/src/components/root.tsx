import { memo, useCallback, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";

import {
  useControllableState,
  useEventCallback,
} from "@impulse-ui-native/core";
import { View } from "@impulse-ui-native/primitives";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { AccordionContextData } from "../contexts";
import type {
  AccordionMultipleRootProps,
  AccordionRootProps,
  AccordionSingleRootProps,
} from "../types";
import { AccordionProvider } from "../contexts";
import { normalizeAccordionValue } from "../utils";

type TriggerRegistration = Parameters<
  AccordionContextData["registerTrigger"]
>[0];

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
  const tokens = useComponentsTokens().accordion;
  const triggerRegistry = useRef<TriggerRegistration[]>([]);

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

  const registerTrigger = useCallback((registration: TriggerRegistration) => {
    triggerRegistry.current = [...triggerRegistry.current, registration];

    return () => {
      triggerRegistry.current = triggerRegistry.current.filter(
        (candidate) => candidate !== registration,
      );
    };
  }, []);

  const focusTrigger = useCallback<AccordionContextData["focusTrigger"]>(
    (currentValue, direction) => {
      const enabledTriggers = triggerRegistry.current.filter(
        (trigger) => !trigger.disabled,
      );
      const currentIndex = enabledTriggers.findIndex(
        (trigger) => trigger.value === currentValue,
      );

      if (enabledTriggers.length === 0) return;

      let nextIndex = currentIndex;

      if (direction === "first") nextIndex = 0;
      if (direction === "last") nextIndex = enabledTriggers.length - 1;
      if (direction === "next") {
        nextIndex = (currentIndex + 1) % enabledTriggers.length;
      }
      if (direction === "previous") {
        nextIndex =
          (currentIndex - 1 + enabledTriggers.length) % enabledTriggers.length;
      }

      enabledTriggers[nextIndex]?.ref.current?.focus();
    },
    [],
  );

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
      focusTrigger,
      registerTrigger,
      toggleItem,
    }),
    [disabled, expandedValues, focusTrigger, registerTrigger, toggleItem],
  );
  const rootStyle = useMemo(
    () => [
      styles.root,
      {
        backgroundColor: tokens.dividerColor,
        borderColor: tokens.borderColor,
        borderRadius: tokens.borderRadius,
        borderWidth: tokens.borderWidth,
        gap: tokens.dividerWidth,
      },
      style,
    ],
    [style, tokens],
  );

  return (
    <AccordionProvider value={context}>
      <View {...props} style={rootStyle}>
        {children}
      </View>
    </AccordionProvider>
  );
});

const styles = StyleSheet.create({
  root: {
    overflow: "hidden",
  },
});
