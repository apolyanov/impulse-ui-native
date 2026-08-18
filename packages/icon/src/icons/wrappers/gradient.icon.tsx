import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GradientBoldIcon } from "../bold/gradient-bold.icon";
import { GradientDuotoneIcon } from "../duotone/gradient-duotone.icon";
import { GradientFillIcon } from "../fill/gradient-fill.icon";
import { GradientLightIcon } from "../light/gradient-light.icon";
import { GradientRegularIcon } from "../regular/gradient-regular.icon";
import { GradientThinIcon } from "../thin/gradient-thin.icon";

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
