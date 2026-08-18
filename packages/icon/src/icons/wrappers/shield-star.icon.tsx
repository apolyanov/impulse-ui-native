import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldStarBoldIcon } from "../bold/shield-star-bold.icon";
import { ShieldStarDuotoneIcon } from "../duotone/shield-star-duotone.icon";
import { ShieldStarFillIcon } from "../fill/shield-star-fill.icon";
import { ShieldStarLightIcon } from "../light/shield-star-light.icon";
import { ShieldStarRegularIcon } from "../regular/shield-star-regular.icon";
import { ShieldStarThinIcon } from "../thin/shield-star-thin.icon";

export const ShieldStarIcon = memo(function ShieldStar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldStarBoldIcon,
      duotone: ShieldStarDuotoneIcon,
      fill: ShieldStarFillIcon,
      light: ShieldStarLightIcon,
      regular: ShieldStarRegularIcon,
      thin: ShieldStarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
