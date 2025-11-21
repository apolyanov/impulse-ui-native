import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GridNineBoldIcon } from "../bold";
import { GridNineDuotoneIcon } from "../duotone";
import { GridNineFillIcon } from "../fill";
import { GridNineLightIcon } from "../light";
import { GridNineRegularIcon } from "../regular";
import { GridNineThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
