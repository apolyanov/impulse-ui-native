import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChatCircleBold } from "../bold";
import { ChatCircleDuotone } from "../duotone";
import { ChatCircleFill } from "../fill";
import { ChatCircleLight } from "../light";
import { ChatCircleRegular } from "../regular";
import { ChatCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChatCircle = memo(function ChatCircle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleBold,
      duotone: ChatCircleDuotone,
      fill: ChatCircleFill,
      light: ChatCircleLight,
      regular: ChatCircleRegular,
      thin: ChatCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
