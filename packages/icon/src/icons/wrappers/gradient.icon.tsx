import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GradientBoldIcon } from "../bold";
import { GradientDuotoneIcon } from "../duotone";
import { GradientFillIcon } from "../fill";
import { GradientLightIcon } from "../light";
import { GradientRegularIcon } from "../regular";
import { GradientThinIcon } from "../thin";

export const GradientIcon = memo(function Gradient(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GradientBoldIcon,
      duotone: GradientDuotoneIcon,
      fill: GradientFillIcon,
      light: GradientLightIcon,
      regular: GradientRegularIcon,
      thin: GradientThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
