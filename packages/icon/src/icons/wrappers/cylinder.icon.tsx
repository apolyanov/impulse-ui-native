import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CylinderBoldIcon } from "../bold/cylinder-bold.icon";
import { CylinderDuotoneIcon } from "../duotone/cylinder-duotone.icon";
import { CylinderFillIcon } from "../fill/cylinder-fill.icon";
import { CylinderLightIcon } from "../light/cylinder-light.icon";
import { CylinderRegularIcon } from "../regular/cylinder-regular.icon";
import { CylinderThinIcon } from "../thin/cylinder-thin.icon";

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
