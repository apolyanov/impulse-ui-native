import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatsBold } from "../bold";
import { ChatsDuotone } from "../duotone";
import { ChatsFill } from "../fill";
import { ChatsLight } from "../light";
import { ChatsRegular } from "../regular";
import { ChatsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Chats = memo(function Chats(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatsBold,
      duotone: ChatsDuotone,
      fill: ChatsFill,
      light: ChatsLight,
      regular: ChatsRegular,
      thin: ChatsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
