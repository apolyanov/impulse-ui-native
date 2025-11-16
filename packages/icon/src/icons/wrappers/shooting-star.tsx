import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShootingStarBold } from "../bold";
import { ShootingStarDuotone } from "../duotone";
import { ShootingStarFill } from "../fill";
import { ShootingStarLight } from "../light";
import { ShootingStarRegular } from "../regular";
import { ShootingStarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShootingStar = memo(function ShootingStar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShootingStarBold,
      duotone: ShootingStarDuotone,
      fill: ShootingStarFill,
      light: ShootingStarLight,
      regular: ShootingStarRegular,
      thin: ShootingStarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
