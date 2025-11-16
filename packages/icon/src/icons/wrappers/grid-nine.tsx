import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GridNineBold } from "../bold";
import { GridNineDuotone } from "../duotone";
import { GridNineFill } from "../fill";
import { GridNineLight } from "../light";
import { GridNineRegular } from "../regular";
import { GridNineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GridNine = memo(function GridNine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GridNineBold,
      duotone: GridNineDuotone,
      fill: GridNineFill,
      light: GridNineLight,
      regular: GridNineRegular,
      thin: GridNineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
