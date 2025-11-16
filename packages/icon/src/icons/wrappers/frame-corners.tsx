import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FrameCornersBold } from "../bold";
import { FrameCornersDuotone } from "../duotone";
import { FrameCornersFill } from "../fill";
import { FrameCornersLight } from "../light";
import { FrameCornersRegular } from "../regular";
import { FrameCornersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FrameCorners = memo(function FrameCorners(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FrameCornersBold,
      duotone: FrameCornersDuotone,
      fill: FrameCornersFill,
      light: FrameCornersLight,
      regular: FrameCornersRegular,
      thin: FrameCornersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
