import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShootingStarBoldIcon } from "../bold";
import { ShootingStarDuotoneIcon } from "../duotone";
import { ShootingStarFillIcon } from "../fill";
import { ShootingStarLightIcon } from "../light";
import { ShootingStarRegularIcon } from "../regular";
import { ShootingStarThinIcon } from "../thin";

export const ShootingStarIcon = memo(function ShootingStar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShootingStarBoldIcon,
      duotone: ShootingStarDuotoneIcon,
      fill: ShootingStarFillIcon,
      light: ShootingStarLightIcon,
      regular: ShootingStarRegularIcon,
      thin: ShootingStarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
