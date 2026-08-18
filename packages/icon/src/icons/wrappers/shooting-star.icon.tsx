import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShootingStarBoldIcon } from "../bold/shooting-star-bold.icon";
import { ShootingStarDuotoneIcon } from "../duotone/shooting-star-duotone.icon";
import { ShootingStarFillIcon } from "../fill/shooting-star-fill.icon";
import { ShootingStarLightIcon } from "../light/shooting-star-light.icon";
import { ShootingStarRegularIcon } from "../regular/shooting-star-regular.icon";
import { ShootingStarThinIcon } from "../thin/shooting-star-thin.icon";

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
