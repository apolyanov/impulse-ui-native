import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChatCircleDotsBoldIcon } from "../bold";
import { ChatCircleDotsDuotoneIcon } from "../duotone";
import { ChatCircleDotsFillIcon } from "../fill";
import { ChatCircleDotsLightIcon } from "../light";
import { ChatCircleDotsRegularIcon } from "../regular";
import { ChatCircleDotsThinIcon } from "../thin";

export const ChatCircleDotsIcon = memo(function ChatCircleDots(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChatCircleDotsBoldIcon,
      duotone: ChatCircleDotsDuotoneIcon,
      fill: ChatCircleDotsFillIcon,
      light: ChatCircleDotsLightIcon,
      regular: ChatCircleDotsRegularIcon,
      thin: ChatCircleDotsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
