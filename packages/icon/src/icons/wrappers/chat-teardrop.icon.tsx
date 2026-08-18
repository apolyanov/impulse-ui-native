import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatTeardropBoldIcon } from "../bold/chat-teardrop-bold.icon";
import { ChatTeardropDuotoneIcon } from "../duotone/chat-teardrop-duotone.icon";
import { ChatTeardropFillIcon } from "../fill/chat-teardrop-fill.icon";
import { ChatTeardropLightIcon } from "../light/chat-teardrop-light.icon";
import { ChatTeardropRegularIcon } from "../regular/chat-teardrop-regular.icon";
import { ChatTeardropThinIcon } from "../thin/chat-teardrop-thin.icon";

export const ChatTeardropIcon = memo(function ChatTeardrop(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropBoldIcon,
      duotone: ChatTeardropDuotoneIcon,
      fill: ChatTeardropFillIcon,
      light: ChatTeardropLightIcon,
      regular: ChatTeardropRegularIcon,
      thin: ChatTeardropThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
