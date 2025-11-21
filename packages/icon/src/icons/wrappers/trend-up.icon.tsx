import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrendUpBoldIcon } from "../bold";
import { TrendUpDuotoneIcon } from "../duotone";
import { TrendUpFillIcon } from "../fill";
import { TrendUpLightIcon } from "../light";
import { TrendUpRegularIcon } from "../regular";
import { TrendUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
