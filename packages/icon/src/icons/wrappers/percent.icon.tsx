import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PercentBoldIcon } from "../bold/percent-bold.icon";
import { PercentDuotoneIcon } from "../duotone/percent-duotone.icon";
import { PercentFillIcon } from "../fill/percent-fill.icon";
import { PercentLightIcon } from "../light/percent-light.icon";
import { PercentRegularIcon } from "../regular/percent-regular.icon";
import { PercentThinIcon } from "../thin/percent-thin.icon";

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
