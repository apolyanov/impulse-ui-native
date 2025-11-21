import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GridFourBoldIcon } from "../bold";
import { GridFourDuotoneIcon } from "../duotone";
import { GridFourFillIcon } from "../fill";
import { GridFourLightIcon } from "../light";
import { GridFourRegularIcon } from "../regular";
import { GridFourThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
