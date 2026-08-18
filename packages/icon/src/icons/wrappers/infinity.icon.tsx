import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { InfinityBoldIcon } from "../bold/infinity-bold.icon";
import { InfinityDuotoneIcon } from "../duotone/infinity-duotone.icon";
import { InfinityFillIcon } from "../fill/infinity-fill.icon";
import { InfinityLightIcon } from "../light/infinity-light.icon";
import { InfinityRegularIcon } from "../regular/infinity-regular.icon";
import { InfinityThinIcon } from "../thin/infinity-thin.icon";

export const InfinityIcon = memo(function Infinity(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InfinityBoldIcon,
      duotone: InfinityDuotoneIcon,
      fill: InfinityFillIcon,
      light: InfinityLightIcon,
      regular: InfinityRegularIcon,
      thin: InfinityThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
