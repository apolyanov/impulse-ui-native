import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RewindCircleBold } from "../bold";
import { RewindCircleDuotone } from "../duotone";
import { RewindCircleFill } from "../fill";
import { RewindCircleLight } from "../light";
import { RewindCircleRegular } from "../regular";
import { RewindCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RewindCircle = memo(function RewindCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RewindCircleBold,
      duotone: RewindCircleDuotone,
      fill: RewindCircleFill,
      light: RewindCircleLight,
      regular: RewindCircleRegular,
      thin: RewindCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
