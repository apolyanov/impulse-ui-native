import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatBoldIcon } from "../bold/chat-bold.icon";
import { ChatDuotoneIcon } from "../duotone/chat-duotone.icon";
import { ChatFillIcon } from "../fill/chat-fill.icon";
import { ChatLightIcon } from "../light/chat-light.icon";
import { ChatRegularIcon } from "../regular/chat-regular.icon";
import { ChatThinIcon } from "../thin/chat-thin.icon";

export const ChatIcon = memo(function Chat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatBoldIcon,
      duotone: ChatDuotoneIcon,
      fill: ChatFillIcon,
      light: ChatLightIcon,
      regular: ChatRegularIcon,
      thin: ChatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
