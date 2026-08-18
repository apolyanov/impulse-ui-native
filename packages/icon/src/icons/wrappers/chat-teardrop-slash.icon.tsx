import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatTeardropSlashBoldIcon } from "../bold/chat-teardrop-slash-bold.icon";
import { ChatTeardropSlashDuotoneIcon } from "../duotone/chat-teardrop-slash-duotone.icon";
import { ChatTeardropSlashFillIcon } from "../fill/chat-teardrop-slash-fill.icon";
import { ChatTeardropSlashLightIcon } from "../light/chat-teardrop-slash-light.icon";
import { ChatTeardropSlashRegularIcon } from "../regular/chat-teardrop-slash-regular.icon";
import { ChatTeardropSlashThinIcon } from "../thin/chat-teardrop-slash-thin.icon";

export const ChatTeardropSlashIcon = memo(function ChatTeardropSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropSlashBoldIcon,
      duotone: ChatTeardropSlashDuotoneIcon,
      fill: ChatTeardropSlashFillIcon,
      light: ChatTeardropSlashLightIcon,
      regular: ChatTeardropSlashRegularIcon,
      thin: ChatTeardropSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
