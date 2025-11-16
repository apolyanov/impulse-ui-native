import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatTeardropDotsBold } from "../bold";
import { ChatTeardropDotsDuotone } from "../duotone";
import { ChatTeardropDotsFill } from "../fill";
import { ChatTeardropDotsLight } from "../light";
import { ChatTeardropDotsRegular } from "../regular";
import { ChatTeardropDotsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatTeardropDots = memo(function ChatTeardropDots(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatTeardropDotsBold,
      duotone: ChatTeardropDotsDuotone,
      fill: ChatTeardropDotsFill,
      light: ChatTeardropDotsLight,
      regular: ChatTeardropDotsRegular,
      thin: ChatTeardropDotsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
