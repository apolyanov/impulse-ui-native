import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCircleBoldIcon } from "../bold";
import { ChatCircleDuotoneIcon } from "../duotone";
import { ChatCircleFillIcon } from "../fill";
import { ChatCircleLightIcon } from "../light";
import { ChatCircleRegularIcon } from "../regular";
import { ChatCircleThinIcon } from "../thin";

export const ChatCircleIcon = memo(function ChatCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleBoldIcon,
      duotone: ChatCircleDuotoneIcon,
      fill: ChatCircleFillIcon,
      light: ChatCircleLightIcon,
      regular: ChatCircleRegularIcon,
      thin: ChatCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
