import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCircleBoldIcon } from "../bold/chat-circle-bold.icon";
import { ChatCircleDuotoneIcon } from "../duotone/chat-circle-duotone.icon";
import { ChatCircleFillIcon } from "../fill/chat-circle-fill.icon";
import { ChatCircleLightIcon } from "../light/chat-circle-light.icon";
import { ChatCircleRegularIcon } from "../regular/chat-circle-regular.icon";
import { ChatCircleThinIcon } from "../thin/chat-circle-thin.icon";

export const ChatCircleIcon = memo(function ChatCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleBoldIcon,
      duotone: ChatCircleDuotoneIcon,
      fill: ChatCircleFillIcon,
      light: ChatCircleLightIcon,
      regular: ChatCircleRegularIcon,
      thin: ChatCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
