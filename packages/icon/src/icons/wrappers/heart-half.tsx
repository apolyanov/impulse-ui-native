import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeartHalfBold } from "../bold";
import { HeartHalfDuotone } from "../duotone";
import { HeartHalfFill } from "../fill";
import { HeartHalfLight } from "../light";
import { HeartHalfRegular } from "../regular";
import { HeartHalfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HeartHalf = memo(function HeartHalf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartHalfBold,
      duotone: HeartHalfDuotone,
      fill: HeartHalfFill,
      light: HeartHalfLight,
      regular: HeartHalfRegular,
      thin: HeartHalfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
