import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCenteredSlashBoldIcon } from "../bold/chat-centered-slash-bold.icon";
import { ChatCenteredSlashDuotoneIcon } from "../duotone/chat-centered-slash-duotone.icon";
import { ChatCenteredSlashFillIcon } from "../fill/chat-centered-slash-fill.icon";
import { ChatCenteredSlashLightIcon } from "../light/chat-centered-slash-light.icon";
import { ChatCenteredSlashRegularIcon } from "../regular/chat-centered-slash-regular.icon";
import { ChatCenteredSlashThinIcon } from "../thin/chat-centered-slash-thin.icon";

export const ChatCenteredSlashIcon = memo(function ChatCenteredSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredSlashBoldIcon,
      duotone: ChatCenteredSlashDuotoneIcon,
      fill: ChatCenteredSlashFillIcon,
      light: ChatCenteredSlashLightIcon,
      regular: ChatCenteredSlashRegularIcon,
      thin: ChatCenteredSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
