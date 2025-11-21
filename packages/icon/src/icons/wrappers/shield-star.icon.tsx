import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldStarBoldIcon } from "../bold";
import { ShieldStarDuotoneIcon } from "../duotone";
import { ShieldStarFillIcon } from "../fill";
import { ShieldStarLightIcon } from "../light";
import { ShieldStarRegularIcon } from "../regular";
import { ShieldStarThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldStarIcon = memo(function ShieldStar(
  props: IconWrapperProps
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
