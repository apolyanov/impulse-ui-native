import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrendUpBoldIcon } from "../bold/trend-up-bold.icon";
import { TrendUpDuotoneIcon } from "../duotone/trend-up-duotone.icon";
import { TrendUpFillIcon } from "../fill/trend-up-fill.icon";
import { TrendUpLightIcon } from "../light/trend-up-light.icon";
import { TrendUpRegularIcon } from "../regular/trend-up-regular.icon";
import { TrendUpThinIcon } from "../thin/trend-up-thin.icon";

export const TrendUpIcon = memo(function TrendUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrendUpBoldIcon,
      duotone: TrendUpDuotoneIcon,
      fill: TrendUpFillIcon,
      light: TrendUpLightIcon,
      regular: TrendUpRegularIcon,
      thin: TrendUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
