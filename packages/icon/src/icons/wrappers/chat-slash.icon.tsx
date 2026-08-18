import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatSlashBoldIcon } from "../bold/chat-slash-bold.icon";
import { ChatSlashDuotoneIcon } from "../duotone/chat-slash-duotone.icon";
import { ChatSlashFillIcon } from "../fill/chat-slash-fill.icon";
import { ChatSlashLightIcon } from "../light/chat-slash-light.icon";
import { ChatSlashRegularIcon } from "../regular/chat-slash-regular.icon";
import { ChatSlashThinIcon } from "../thin/chat-slash-thin.icon";

export const ChatSlashIcon = memo(function ChatSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatSlashBoldIcon,
      duotone: ChatSlashDuotoneIcon,
      fill: ChatSlashFillIcon,
      light: ChatSlashLightIcon,
      regular: ChatSlashRegularIcon,
      thin: ChatSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
