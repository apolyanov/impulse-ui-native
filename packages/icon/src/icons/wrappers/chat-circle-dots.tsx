import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCircleDotsBold } from "../bold";
import { ChatCircleDotsDuotone } from "../duotone";
import { ChatCircleDotsFill } from "../fill";
import { ChatCircleDotsLight } from "../light";
import { ChatCircleDotsRegular } from "../regular";
import { ChatCircleDotsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCircleDots = memo(function ChatCircleDots(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleDotsBold,
      duotone: ChatCircleDotsDuotone,
      fill: ChatCircleDotsFill,
      light: ChatCircleDotsLight,
      regular: ChatCircleDotsRegular,
      thin: ChatCircleDotsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
