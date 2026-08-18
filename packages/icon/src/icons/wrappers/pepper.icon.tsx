import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PepperBoldIcon } from "../bold/pepper-bold.icon";
import { PepperDuotoneIcon } from "../duotone/pepper-duotone.icon";
import { PepperFillIcon } from "../fill/pepper-fill.icon";
import { PepperLightIcon } from "../light/pepper-light.icon";
import { PepperRegularIcon } from "../regular/pepper-regular.icon";
import { PepperThinIcon } from "../thin/pepper-thin.icon";

export const PepperIcon = memo(function Pepper(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PepperBoldIcon,
      duotone: PepperDuotoneIcon,
      fill: PepperFillIcon,
      light: PepperLightIcon,
      regular: PepperRegularIcon,
      thin: PepperThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
