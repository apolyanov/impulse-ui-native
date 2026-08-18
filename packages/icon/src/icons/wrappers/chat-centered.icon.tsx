import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCenteredBoldIcon } from "../bold/chat-centered-bold.icon";
import { ChatCenteredDuotoneIcon } from "../duotone/chat-centered-duotone.icon";
import { ChatCenteredFillIcon } from "../fill/chat-centered-fill.icon";
import { ChatCenteredLightIcon } from "../light/chat-centered-light.icon";
import { ChatCenteredRegularIcon } from "../regular/chat-centered-regular.icon";
import { ChatCenteredThinIcon } from "../thin/chat-centered-thin.icon";

export const ChatCenteredIcon = memo(function ChatCentered(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredBoldIcon,
      duotone: ChatCenteredDuotoneIcon,
      fill: ChatCenteredFillIcon,
      light: ChatCenteredLightIcon,
      regular: ChatCenteredRegularIcon,
      thin: ChatCenteredThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
