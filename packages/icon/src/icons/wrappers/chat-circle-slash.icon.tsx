import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCircleSlashBoldIcon } from "../bold/chat-circle-slash-bold.icon";
import { ChatCircleSlashDuotoneIcon } from "../duotone/chat-circle-slash-duotone.icon";
import { ChatCircleSlashFillIcon } from "../fill/chat-circle-slash-fill.icon";
import { ChatCircleSlashLightIcon } from "../light/chat-circle-slash-light.icon";
import { ChatCircleSlashRegularIcon } from "../regular/chat-circle-slash-regular.icon";
import { ChatCircleSlashThinIcon } from "../thin/chat-circle-slash-thin.icon";

export const ChatCircleSlashIcon = memo(function ChatCircleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleSlashBoldIcon,
      duotone: ChatCircleSlashDuotoneIcon,
      fill: ChatCircleSlashFillIcon,
      light: ChatCircleSlashLightIcon,
      regular: ChatCircleSlashRegularIcon,
      thin: ChatCircleSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
