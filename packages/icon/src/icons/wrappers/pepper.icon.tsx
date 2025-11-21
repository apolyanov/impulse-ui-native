import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PepperBoldIcon } from "../bold";
import { PepperDuotoneIcon } from "../duotone";
import { PepperFillIcon } from "../fill";
import { PepperLightIcon } from "../light";
import { PepperRegularIcon } from "../regular";
import { PepperThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
