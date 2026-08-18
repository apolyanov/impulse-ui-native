import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatDotsBoldIcon } from "../bold/chat-dots-bold.icon";
import { ChatDotsDuotoneIcon } from "../duotone/chat-dots-duotone.icon";
import { ChatDotsFillIcon } from "../fill/chat-dots-fill.icon";
import { ChatDotsLightIcon } from "../light/chat-dots-light.icon";
import { ChatDotsRegularIcon } from "../regular/chat-dots-regular.icon";
import { ChatDotsThinIcon } from "../thin/chat-dots-thin.icon";

export const ChatDotsIcon = memo(function ChatDots(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatDotsBoldIcon,
      duotone: ChatDotsDuotoneIcon,
      fill: ChatDotsFillIcon,
      light: ChatDotsLightIcon,
      regular: ChatDotsRegularIcon,
      thin: ChatDotsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
