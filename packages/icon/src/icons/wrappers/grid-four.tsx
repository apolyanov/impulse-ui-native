import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GridFourBold } from "../bold";
import { GridFourDuotone } from "../duotone";
import { GridFourFill } from "../fill";
import { GridFourLight } from "../light";
import { GridFourRegular } from "../regular";
import { GridFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GridFour = memo(function GridFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GridFourBold,
      duotone: GridFourDuotone,
      fill: GridFourFill,
      light: GridFourLight,
      regular: GridFourRegular,
      thin: GridFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
