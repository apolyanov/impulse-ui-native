import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShapesBoldIcon } from "../bold/shapes-bold.icon";
import { ShapesDuotoneIcon } from "../duotone/shapes-duotone.icon";
import { ShapesFillIcon } from "../fill/shapes-fill.icon";
import { ShapesLightIcon } from "../light/shapes-light.icon";
import { ShapesRegularIcon } from "../regular/shapes-regular.icon";
import { ShapesThinIcon } from "../thin/shapes-thin.icon";

export const ShapesIcon = memo(function Shapes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShapesBoldIcon,
      duotone: ShapesDuotoneIcon,
      fill: ShapesFillIcon,
      light: ShapesLightIcon,
      regular: ShapesRegularIcon,
      thin: ShapesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
