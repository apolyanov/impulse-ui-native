import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatsTeardropBoldIcon } from "../bold/chats-teardrop-bold.icon";
import { ChatsTeardropDuotoneIcon } from "../duotone/chats-teardrop-duotone.icon";
import { ChatsTeardropFillIcon } from "../fill/chats-teardrop-fill.icon";
import { ChatsTeardropLightIcon } from "../light/chats-teardrop-light.icon";
import { ChatsTeardropRegularIcon } from "../regular/chats-teardrop-regular.icon";
import { ChatsTeardropThinIcon } from "../thin/chats-teardrop-thin.icon";

export const ChatsTeardropIcon = memo(function ChatsTeardrop(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatsTeardropBoldIcon,
      duotone: ChatsTeardropDuotoneIcon,
      fill: ChatsTeardropFillIcon,
      light: ChatsTeardropLightIcon,
      regular: ChatsTeardropRegularIcon,
      thin: ChatsTeardropThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
