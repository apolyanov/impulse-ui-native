import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MagnetStraightBoldIcon } from "../bold/magnet-straight-bold.icon";
import { MagnetStraightDuotoneIcon } from "../duotone/magnet-straight-duotone.icon";
import { MagnetStraightFillIcon } from "../fill/magnet-straight-fill.icon";
import { MagnetStraightLightIcon } from "../light/magnet-straight-light.icon";
import { MagnetStraightRegularIcon } from "../regular/magnet-straight-regular.icon";
import { MagnetStraightThinIcon } from "../thin/magnet-straight-thin.icon";

export const MagnetStraightIcon = memo(function MagnetStraight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnetStraightBoldIcon,
      duotone: MagnetStraightDuotoneIcon,
      fill: MagnetStraightFillIcon,
      light: MagnetStraightLightIcon,
      regular: MagnetStraightRegularIcon,
      thin: MagnetStraightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
