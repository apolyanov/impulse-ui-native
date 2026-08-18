import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ThreeDBoldIcon } from "../bold/three-d-bold.icon";
import { ThreeDDuotoneIcon } from "../duotone/three-d-duotone.icon";
import { ThreeDFillIcon } from "../fill/three-d-fill.icon";
import { ThreeDLightIcon } from "../light/three-d-light.icon";
import { ThreeDRegularIcon } from "../regular/three-d-regular.icon";
import { ThreeDThinIcon } from "../thin/three-d-thin.icon";

export const ThreeDIcon = memo(function ThreeD(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThreeDBoldIcon,
      duotone: ThreeDDuotoneIcon,
      fill: ThreeDFillIcon,
      light: ThreeDLightIcon,
      regular: ThreeDRegularIcon,
      thin: ThreeDThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
