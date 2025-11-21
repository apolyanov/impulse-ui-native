import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CylinderBoldIcon } from "../bold";
import { CylinderDuotoneIcon } from "../duotone";
import { CylinderFillIcon } from "../fill";
import { CylinderLightIcon } from "../light";
import { CylinderRegularIcon } from "../regular";
import { CylinderThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CylinderIcon = memo(function Cylinder(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CylinderBoldIcon,
      duotone: CylinderDuotoneIcon,
      fill: CylinderFillIcon,
      light: CylinderLightIcon,
      regular: CylinderRegularIcon,
      thin: CylinderThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
