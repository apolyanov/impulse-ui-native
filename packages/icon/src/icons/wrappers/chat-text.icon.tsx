import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatTextBoldIcon } from "../bold/chat-text-bold.icon";
import { ChatTextDuotoneIcon } from "../duotone/chat-text-duotone.icon";
import { ChatTextFillIcon } from "../fill/chat-text-fill.icon";
import { ChatTextLightIcon } from "../light/chat-text-light.icon";
import { ChatTextRegularIcon } from "../regular/chat-text-regular.icon";
import { ChatTextThinIcon } from "../thin/chat-text-thin.icon";

export const ChatTextIcon = memo(function ChatText(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTextBoldIcon,
      duotone: ChatTextDuotoneIcon,
      fill: ChatTextFillIcon,
      light: ChatTextLightIcon,
      regular: ChatTextRegularIcon,
      thin: ChatTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
