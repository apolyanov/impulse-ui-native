import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShapesBold } from "../bold";
import { ShapesDuotone } from "../duotone";
import { ShapesFill } from "../fill";
import { ShapesLight } from "../light";
import { ShapesRegular } from "../regular";
import { ShapesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Shapes = memo(function Shapes(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShapesBold,
      duotone: ShapesDuotone,
      fill: ShapesFill,
      light: ShapesLight,
      regular: ShapesRegular,
      thin: ShapesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
