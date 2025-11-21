import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VirtualRealityBoldIcon } from "../bold";
import { VirtualRealityDuotoneIcon } from "../duotone";
import { VirtualRealityFillIcon } from "../fill";
import { VirtualRealityLightIcon } from "../light";
import { VirtualRealityRegularIcon } from "../regular";
import { VirtualRealityThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VirtualRealityIcon = memo(function VirtualReality(
  props: IconWrapperProps
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
