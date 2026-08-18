import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCenteredTextBoldIcon } from "../bold/chat-centered-text-bold.icon";
import { ChatCenteredTextDuotoneIcon } from "../duotone/chat-centered-text-duotone.icon";
import { ChatCenteredTextFillIcon } from "../fill/chat-centered-text-fill.icon";
import { ChatCenteredTextLightIcon } from "../light/chat-centered-text-light.icon";
import { ChatCenteredTextRegularIcon } from "../regular/chat-centered-text-regular.icon";
import { ChatCenteredTextThinIcon } from "../thin/chat-centered-text-thin.icon";

export const ChatCenteredTextIcon = memo(function ChatCenteredText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredTextBoldIcon,
      duotone: ChatCenteredTextDuotoneIcon,
      fill: ChatCenteredTextFillIcon,
      light: ChatCenteredTextLightIcon,
      regular: ChatCenteredTextRegularIcon,
      thin: ChatCenteredTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
