import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { InfinityBoldIcon } from "../bold";
import { InfinityDuotoneIcon } from "../duotone";
import { InfinityFillIcon } from "../fill";
import { InfinityLightIcon } from "../light";
import { InfinityRegularIcon } from "../regular";
import { InfinityThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
