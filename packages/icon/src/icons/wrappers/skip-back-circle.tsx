import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SkipBackCircleBold } from "../bold";
import { SkipBackCircleDuotone } from "../duotone";
import { SkipBackCircleFill } from "../fill";
import { SkipBackCircleLight } from "../light";
import { SkipBackCircleRegular } from "../regular";
import { SkipBackCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SkipBackCircle = memo(function SkipBackCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipBackCircleBold,
      duotone: SkipBackCircleDuotone,
      fill: SkipBackCircleFill,
      light: SkipBackCircleLight,
      regular: SkipBackCircleRegular,
      thin: SkipBackCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
