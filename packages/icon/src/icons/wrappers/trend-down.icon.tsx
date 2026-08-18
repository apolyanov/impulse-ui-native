import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrendDownBoldIcon } from "../bold/trend-down-bold.icon";
import { TrendDownDuotoneIcon } from "../duotone/trend-down-duotone.icon";
import { TrendDownFillIcon } from "../fill/trend-down-fill.icon";
import { TrendDownLightIcon } from "../light/trend-down-light.icon";
import { TrendDownRegularIcon } from "../regular/trend-down-regular.icon";
import { TrendDownThinIcon } from "../thin/trend-down-thin.icon";

export const TrendDownIcon = memo(function TrendDown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrendDownBoldIcon,
      duotone: TrendDownDuotoneIcon,
      fill: TrendDownFillIcon,
      light: TrendDownLightIcon,
      regular: TrendDownRegularIcon,
      thin: TrendDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
