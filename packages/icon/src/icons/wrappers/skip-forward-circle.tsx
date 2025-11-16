import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SkipForwardCircleBold } from "../bold";
import { SkipForwardCircleDuotone } from "../duotone";
import { SkipForwardCircleFill } from "../fill";
import { SkipForwardCircleLight } from "../light";
import { SkipForwardCircleRegular } from "../regular";
import { SkipForwardCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SkipForwardCircle = memo(function SkipForwardCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipForwardCircleBold,
      duotone: SkipForwardCircleDuotone,
      fill: SkipForwardCircleFill,
      light: SkipForwardCircleLight,
      regular: SkipForwardCircleRegular,
      thin: SkipForwardCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
