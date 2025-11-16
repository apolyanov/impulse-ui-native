import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { InfinityBold } from "../bold";
import { InfinityDuotone } from "../duotone";
import { InfinityFill } from "../fill";
import { InfinityLight } from "../light";
import { InfinityRegular } from "../regular";
import { InfinityThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Infinity = memo(function Infinity(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: InfinityBold,
      duotone: InfinityDuotone,
      fill: InfinityFill,
      light: InfinityLight,
      regular: InfinityRegular,
      thin: InfinityThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
