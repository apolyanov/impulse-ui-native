import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TriangleBold } from "../bold";
import { TriangleDuotone } from "../duotone";
import { TriangleFill } from "../fill";
import { TriangleLight } from "../light";
import { TriangleRegular } from "../regular";
import { TriangleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Triangle = memo(function Triangle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TriangleBold,
      duotone: TriangleDuotone,
      fill: TriangleFill,
      light: TriangleLight,
      regular: TriangleRegular,
      thin: TriangleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
