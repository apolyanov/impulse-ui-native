import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCenteredDotsBold } from "../bold";
import { ChatCenteredDotsDuotone } from "../duotone";
import { ChatCenteredDotsFill } from "../fill";
import { ChatCenteredDotsLight } from "../light";
import { ChatCenteredDotsRegular } from "../regular";
import { ChatCenteredDotsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCenteredDots = memo(function ChatCenteredDots(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCenteredDotsBold,
      duotone: ChatCenteredDotsDuotone,
      fill: ChatCenteredDotsFill,
      light: ChatCenteredDotsLight,
      regular: ChatCenteredDotsRegular,
      thin: ChatCenteredDotsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
