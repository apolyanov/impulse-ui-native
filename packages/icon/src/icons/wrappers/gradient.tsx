import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GradientBold } from "../bold";
import { GradientDuotone } from "../duotone";
import { GradientFill } from "../fill";
import { GradientLight } from "../light";
import { GradientRegular } from "../regular";
import { GradientThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Gradient = memo(function Gradient(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GradientBold,
      duotone: GradientDuotone,
      fill: GradientFill,
      light: GradientLight,
      regular: GradientRegular,
      thin: GradientThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
