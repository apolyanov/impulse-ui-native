import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FrameCornersBoldIcon } from "../bold/frame-corners-bold.icon";
import { FrameCornersDuotoneIcon } from "../duotone/frame-corners-duotone.icon";
import { FrameCornersFillIcon } from "../fill/frame-corners-fill.icon";
import { FrameCornersLightIcon } from "../light/frame-corners-light.icon";
import { FrameCornersRegularIcon } from "../regular/frame-corners-regular.icon";
import { FrameCornersThinIcon } from "../thin/frame-corners-thin.icon";

export const FrameCornersIcon = memo(function FrameCorners(
  props: IconWrapperProps,
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
