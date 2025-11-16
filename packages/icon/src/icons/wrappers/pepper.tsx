import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PepperBold } from "../bold";
import { PepperDuotone } from "../duotone";
import { PepperFill } from "../fill";
import { PepperLight } from "../light";
import { PepperRegular } from "../regular";
import { PepperThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pepper = memo(function Pepper(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PepperBold,
      duotone: PepperDuotone,
      fill: PepperFill,
      light: PepperLight,
      regular: PepperRegular,
      thin: PepperThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
