import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCenteredDotsBoldIcon } from "../bold/chat-centered-dots-bold.icon";
import { ChatCenteredDotsDuotoneIcon } from "../duotone/chat-centered-dots-duotone.icon";
import { ChatCenteredDotsFillIcon } from "../fill/chat-centered-dots-fill.icon";
import { ChatCenteredDotsLightIcon } from "../light/chat-centered-dots-light.icon";
import { ChatCenteredDotsRegularIcon } from "../regular/chat-centered-dots-regular.icon";
import { ChatCenteredDotsThinIcon } from "../thin/chat-centered-dots-thin.icon";

export const ChatCenteredDotsIcon = memo(function ChatCenteredDots(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredDotsBoldIcon,
      duotone: ChatCenteredDotsDuotoneIcon,
      fill: ChatCenteredDotsFillIcon,
      light: ChatCenteredDotsLightIcon,
      regular: ChatCenteredDotsRegularIcon,
      thin: ChatCenteredDotsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
