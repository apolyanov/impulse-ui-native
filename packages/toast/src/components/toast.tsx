import { memo } from "react";

import { Icon } from "@impulse-ui-native/icon";
import { XIcon } from "@impulse-ui-native/icon/icons/x";
import { useComponentsTokens } from "@impulse-ui-native/theme";

import type { ToastProps } from "../types";
import { ToastIcons } from "../constants/toast-icons.constants";
import { Toast } from "./toast-parts";

export const ToastComponent = memo(function ToastComponent({
  children,
  title,
  description,
  action,
  actionProps,
  tone = "success",
  hideIcon = false,
  hideClose = false,
  ...props
}: ToastProps) {
  const tokens = useComponentsTokens().toast;

  return (
    <Toast.Root {...props} tone={tone}>
      {!hideIcon ? (
        <Toast.Icon>
          <Icon
            icon={ToastIcons[tone]}
            size={tokens.iconSize}
            color={tokens.tones[tone].value}
          />
        </Toast.Icon>
      ) : null}
      <Toast.Content>
        {title ? <Toast.Title>{title}</Toast.Title> : null}
        {description !== null && description !== undefined ? (
          <Toast.Description>{description}</Toast.Description>
        ) : null}
        {children}
      </Toast.Content>
      {action !== null && action !== undefined ? (
        <Toast.Action {...actionProps}>{action}</Toast.Action>
      ) : null}
      {!hideClose ? (
        <Toast.Close>
          <Icon
            icon={XIcon}
            size={tokens.closeIconSize}
            color={tokens.closeColor}
          />
        </Toast.Close>
      ) : null}
    </Toast.Root>
  );
});
