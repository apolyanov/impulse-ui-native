import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagnetStraightBold } from "../bold";
import { MagnetStraightDuotone } from "../duotone";
import { MagnetStraightFill } from "../fill";
import { MagnetStraightLight } from "../light";
import { MagnetStraightRegular } from "../regular";
import { MagnetStraightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MagnetStraight = memo(function MagnetStraight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnetStraightBold,
      duotone: MagnetStraightDuotone,
      fill: MagnetStraightFill,
      light: MagnetStraightLight,
      regular: MagnetStraightRegular,
      thin: MagnetStraightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
