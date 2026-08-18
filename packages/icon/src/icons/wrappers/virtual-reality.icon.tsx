import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VirtualRealityBoldIcon } from "../bold/virtual-reality-bold.icon";
import { VirtualRealityDuotoneIcon } from "../duotone/virtual-reality-duotone.icon";
import { VirtualRealityFillIcon } from "../fill/virtual-reality-fill.icon";
import { VirtualRealityLightIcon } from "../light/virtual-reality-light.icon";
import { VirtualRealityRegularIcon } from "../regular/virtual-reality-regular.icon";
import { VirtualRealityThinIcon } from "../thin/virtual-reality-thin.icon";

export const VirtualRealityIcon = memo(function VirtualReality(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VirtualRealityBoldIcon,
      duotone: VirtualRealityDuotoneIcon,
      fill: VirtualRealityFillIcon,
      light: VirtualRealityLightIcon,
      regular: VirtualRealityRegularIcon,
      thin: VirtualRealityThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
