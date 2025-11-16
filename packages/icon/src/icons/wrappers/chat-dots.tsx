import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatDotsBold } from "../bold";
import { ChatDotsDuotone } from "../duotone";
import { ChatDotsFill } from "../fill";
import { ChatDotsLight } from "../light";
import { ChatDotsRegular } from "../regular";
import { ChatDotsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatDots = memo(function ChatDots(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatDotsBold,
      duotone: ChatDotsDuotone,
      fill: ChatDotsFill,
      light: ChatDotsLight,
      regular: ChatDotsRegular,
      thin: ChatDotsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
