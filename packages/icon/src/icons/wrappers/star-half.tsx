import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StarHalfBold } from "../bold";
import { StarHalfDuotone } from "../duotone";
import { StarHalfFill } from "../fill";
import { StarHalfLight } from "../light";
import { StarHalfRegular } from "../regular";
import { StarHalfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StarHalf = memo(function StarHalf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarHalfBold,
      duotone: StarHalfDuotone,
      fill: StarHalfFill,
      light: StarHalfLight,
      regular: StarHalfRegular,
      thin: StarHalfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
