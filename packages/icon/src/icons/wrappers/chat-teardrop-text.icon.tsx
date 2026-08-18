import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatTeardropTextBoldIcon } from "../bold/chat-teardrop-text-bold.icon";
import { ChatTeardropTextDuotoneIcon } from "../duotone/chat-teardrop-text-duotone.icon";
import { ChatTeardropTextFillIcon } from "../fill/chat-teardrop-text-fill.icon";
import { ChatTeardropTextLightIcon } from "../light/chat-teardrop-text-light.icon";
import { ChatTeardropTextRegularIcon } from "../regular/chat-teardrop-text-regular.icon";
import { ChatTeardropTextThinIcon } from "../thin/chat-teardrop-text-thin.icon";

export const ChatTeardropTextIcon = memo(function ChatTeardropText(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropTextBoldIcon,
      duotone: ChatTeardropTextDuotoneIcon,
      fill: ChatTeardropTextFillIcon,
      light: ChatTeardropTextLightIcon,
      regular: ChatTeardropTextRegularIcon,
      thin: ChatTeardropTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
