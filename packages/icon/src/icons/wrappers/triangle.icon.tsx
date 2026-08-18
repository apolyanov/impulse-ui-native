import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TriangleBoldIcon } from "../bold/triangle-bold.icon";
import { TriangleDuotoneIcon } from "../duotone/triangle-duotone.icon";
import { TriangleFillIcon } from "../fill/triangle-fill.icon";
import { TriangleLightIcon } from "../light/triangle-light.icon";
import { TriangleRegularIcon } from "../regular/triangle-regular.icon";
import { TriangleThinIcon } from "../thin/triangle-thin.icon";

export const TriangleIcon = memo(function Triangle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TriangleBoldIcon,
      duotone: TriangleDuotoneIcon,
      fill: TriangleFillIcon,
      light: TriangleLightIcon,
      regular: TriangleRegularIcon,
      thin: TriangleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
