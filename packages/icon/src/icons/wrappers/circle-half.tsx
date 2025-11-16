import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CircleHalfBold } from "../bold";
import { CircleHalfDuotone } from "../duotone";
import { CircleHalfFill } from "../fill";
import { CircleHalfLight } from "../light";
import { CircleHalfRegular } from "../regular";
import { CircleHalfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CircleHalf = memo(function CircleHalf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleHalfBold,
      duotone: CircleHalfDuotone,
      fill: CircleHalfFill,
      light: CircleHalfLight,
      regular: CircleHalfRegular,
      thin: CircleHalfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
