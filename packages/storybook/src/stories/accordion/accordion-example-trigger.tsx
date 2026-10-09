import { memo } from "react";

import type { AccordionTriggerProps } from "@impulse-ui-native/accordion";
import { Accordion } from "@impulse-ui-native/accordion";
import { Icon } from "@impulse-ui-native/icon";
import { CaretDownIcon } from "@impulse-ui-native/icon/icons/caret-down";
import { Typography } from "@impulse-ui-native/primitives";
import {
  getControlStateTokens,
  useComponentsTokens,
} from "@impulse-ui-native/theme";

export const AccordionExampleTrigger = memo(function AccordionExampleTrigger({
  children,
  disabled,
  ...props
}: AccordionTriggerProps) {
  const tokens = useComponentsTokens().accordion;
  const appearance = getControlStateTokens(tokens.trigger.states, {
    disabled: disabled === true,
  });

  return (
    <Accordion.Trigger {...props} disabled={disabled}>
      <Typography.Label color={appearance.titleColor} flex={1}>
        {children}
      </Typography.Label>
      <Accordion.Indicator>
        <Icon
          color={appearance.iconColor}
          icon={CaretDownIcon}
          size={tokens.iconSize}
        />
      </Accordion.Indicator>
    </Accordion.Trigger>
  );
});
