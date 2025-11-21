import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScooterBoldIcon } from "../bold";
import { ScooterDuotoneIcon } from "../duotone";
import { ScooterFillIcon } from "../fill";
import { ScooterLightIcon } from "../light";
import { ScooterRegularIcon } from "../regular";
import { ScooterThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ScooterIcon = memo(function Scooter(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScooterBoldIcon,
      duotone: ScooterDuotoneIcon,
      fill: ScooterFillIcon,
      light: ScooterLightIcon,
      regular: ScooterRegularIcon,
      thin: ScooterThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
