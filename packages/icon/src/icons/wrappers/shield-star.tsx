import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldStarBold } from "../bold";
import { ShieldStarDuotone } from "../duotone";
import { ShieldStarFill } from "../fill";
import { ShieldStarLight } from "../light";
import { ShieldStarRegular } from "../regular";
import { ShieldStarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldStar = memo(function ShieldStar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldStarBold,
      duotone: ShieldStarDuotone,
      fill: ShieldStarFill,
      light: ShieldStarLight,
      regular: ShieldStarRegular,
      thin: ShieldStarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
