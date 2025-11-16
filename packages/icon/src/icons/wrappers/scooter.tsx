import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScooterBold } from "../bold";
import { ScooterDuotone } from "../duotone";
import { ScooterFill } from "../fill";
import { ScooterLight } from "../light";
import { ScooterRegular } from "../regular";
import { ScooterThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Scooter = memo(function Scooter(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScooterBold,
      duotone: ScooterDuotone,
      fill: ScooterFill,
      light: ScooterLight,
      regular: ScooterRegular,
      thin: ScooterThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
