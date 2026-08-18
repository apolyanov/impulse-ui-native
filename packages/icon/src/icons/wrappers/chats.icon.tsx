import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatsBoldIcon } from "../bold/chats-bold.icon";
import { ChatsDuotoneIcon } from "../duotone/chats-duotone.icon";
import { ChatsFillIcon } from "../fill/chats-fill.icon";
import { ChatsLightIcon } from "../light/chats-light.icon";
import { ChatsRegularIcon } from "../regular/chats-regular.icon";
import { ChatsThinIcon } from "../thin/chats-thin.icon";

export const ChatsIcon = memo(function Chats(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatsBoldIcon,
      duotone: ChatsDuotoneIcon,
      fill: ChatsFillIcon,
      light: ChatsLightIcon,
      regular: ChatsRegularIcon,
      thin: ChatsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
