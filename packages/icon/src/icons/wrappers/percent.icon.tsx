import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PercentBoldIcon } from "../bold";
import { PercentDuotoneIcon } from "../duotone";
import { PercentFillIcon } from "../fill";
import { PercentLightIcon } from "../light";
import { PercentRegularIcon } from "../regular";
import { PercentThinIcon } from "../thin";

export const PercentIcon = memo(function Percent(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PercentBoldIcon,
      duotone: PercentDuotoneIcon,
      fill: PercentFillIcon,
      light: PercentLightIcon,
      regular: PercentRegularIcon,
      thin: PercentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
