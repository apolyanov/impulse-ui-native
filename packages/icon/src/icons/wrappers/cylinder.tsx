import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CylinderBold } from "../bold";
import { CylinderDuotone } from "../duotone";
import { CylinderFill } from "../fill";
import { CylinderLight } from "../light";
import { CylinderRegular } from "../regular";
import { CylinderThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cylinder = memo(function Cylinder(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CylinderBold,
      duotone: CylinderDuotone,
      fill: CylinderFill,
      light: CylinderLight,
      regular: CylinderRegular,
      thin: CylinderThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
