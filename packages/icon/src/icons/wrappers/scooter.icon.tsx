import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScooterBoldIcon } from "../bold/scooter-bold.icon";
import { ScooterDuotoneIcon } from "../duotone/scooter-duotone.icon";
import { ScooterFillIcon } from "../fill/scooter-fill.icon";
import { ScooterLightIcon } from "../light/scooter-light.icon";
import { ScooterRegularIcon } from "../regular/scooter-regular.icon";
import { ScooterThinIcon } from "../thin/scooter-thin.icon";

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
