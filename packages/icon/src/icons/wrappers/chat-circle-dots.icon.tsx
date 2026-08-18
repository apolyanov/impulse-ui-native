import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCircleDotsBoldIcon } from "../bold/chat-circle-dots-bold.icon";
import { ChatCircleDotsDuotoneIcon } from "../duotone/chat-circle-dots-duotone.icon";
import { ChatCircleDotsFillIcon } from "../fill/chat-circle-dots-fill.icon";
import { ChatCircleDotsLightIcon } from "../light/chat-circle-dots-light.icon";
import { ChatCircleDotsRegularIcon } from "../regular/chat-circle-dots-regular.icon";
import { ChatCircleDotsThinIcon } from "../thin/chat-circle-dots-thin.icon";

export const ChatCircleDotsIcon = memo(function ChatCircleDots(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleDotsBoldIcon,
      duotone: ChatCircleDotsDuotoneIcon,
      fill: ChatCircleDotsFillIcon,
      light: ChatCircleDotsLightIcon,
      regular: ChatCircleDotsRegularIcon,
      thin: ChatCircleDotsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
