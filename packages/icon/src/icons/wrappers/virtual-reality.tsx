import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VirtualRealityBold } from "../bold";
import { VirtualRealityDuotone } from "../duotone";
import { VirtualRealityFill } from "../fill";
import { VirtualRealityLight } from "../light";
import { VirtualRealityRegular } from "../regular";
import { VirtualRealityThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VirtualReality = memo(function VirtualReality(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VirtualRealityBold,
      duotone: VirtualRealityDuotone,
      fill: VirtualRealityFill,
      light: VirtualRealityLight,
      regular: VirtualRealityRegular,
      thin: VirtualRealityThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
