import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GridNineBoldIcon } from "../bold/grid-nine-bold.icon";
import { GridNineDuotoneIcon } from "../duotone/grid-nine-duotone.icon";
import { GridNineFillIcon } from "../fill/grid-nine-fill.icon";
import { GridNineLightIcon } from "../light/grid-nine-light.icon";
import { GridNineRegularIcon } from "../regular/grid-nine-regular.icon";
import { GridNineThinIcon } from "../thin/grid-nine-thin.icon";

export const GridNineIcon = memo(function GridNine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GridNineBoldIcon,
      duotone: GridNineDuotoneIcon,
      fill: GridNineFillIcon,
      light: GridNineLightIcon,
      regular: GridNineRegularIcon,
      thin: GridNineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
