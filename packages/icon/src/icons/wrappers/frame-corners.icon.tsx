import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FrameCornersBoldIcon } from "../bold";
import { FrameCornersDuotoneIcon } from "../duotone";
import { FrameCornersFillIcon } from "../fill";
import { FrameCornersLightIcon } from "../light";
import { FrameCornersRegularIcon } from "../regular";
import { FrameCornersThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FrameCornersIcon = memo(function FrameCorners(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FrameCornersBoldIcon,
      duotone: FrameCornersDuotoneIcon,
      fill: FrameCornersFillIcon,
      light: FrameCornersLightIcon,
      regular: FrameCornersRegularIcon,
      thin: FrameCornersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
