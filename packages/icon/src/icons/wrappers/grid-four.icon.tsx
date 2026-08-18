import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GridFourBoldIcon } from "../bold/grid-four-bold.icon";
import { GridFourDuotoneIcon } from "../duotone/grid-four-duotone.icon";
import { GridFourFillIcon } from "../fill/grid-four-fill.icon";
import { GridFourLightIcon } from "../light/grid-four-light.icon";
import { GridFourRegularIcon } from "../regular/grid-four-regular.icon";
import { GridFourThinIcon } from "../thin/grid-four-thin.icon";

export const GridFourIcon = memo(function GridFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GridFourBoldIcon,
      duotone: GridFourDuotoneIcon,
      fill: GridFourFillIcon,
      light: GridFourLightIcon,
      regular: GridFourRegularIcon,
      thin: GridFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
