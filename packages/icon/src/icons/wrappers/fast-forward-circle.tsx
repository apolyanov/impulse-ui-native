import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FastForwardCircleBold } from "../bold";
import { FastForwardCircleDuotone } from "../duotone";
import { FastForwardCircleFill } from "../fill";
import { FastForwardCircleLight } from "../light";
import { FastForwardCircleRegular } from "../regular";
import { FastForwardCircleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FastForwardCircle = memo(function FastForwardCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FastForwardCircleBold,
      duotone: FastForwardCircleDuotone,
      fill: FastForwardCircleFill,
      light: FastForwardCircleLight,
      regular: FastForwardCircleRegular,
      thin: FastForwardCircleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
