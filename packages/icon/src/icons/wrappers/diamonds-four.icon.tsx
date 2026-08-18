import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiamondsFourBoldIcon } from "../bold/diamonds-four-bold.icon";
import { DiamondsFourDuotoneIcon } from "../duotone/diamonds-four-duotone.icon";
import { DiamondsFourFillIcon } from "../fill/diamonds-four-fill.icon";
import { DiamondsFourLightIcon } from "../light/diamonds-four-light.icon";
import { DiamondsFourRegularIcon } from "../regular/diamonds-four-regular.icon";
import { DiamondsFourThinIcon } from "../thin/diamonds-four-thin.icon";

export const DiamondsFourIcon = memo(function DiamondsFour(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiamondsFourBoldIcon,
      duotone: DiamondsFourDuotoneIcon,
      fill: DiamondsFourFillIcon,
      light: DiamondsFourLightIcon,
      regular: DiamondsFourRegularIcon,
      thin: DiamondsFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
