import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrendUpBold } from "../bold";
import { TrendUpDuotone } from "../duotone";
import { TrendUpFill } from "../fill";
import { TrendUpLight } from "../light";
import { TrendUpRegular } from "../regular";
import { TrendUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrendUp = memo(function TrendUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrendUpBold,
      duotone: TrendUpDuotone,
      fill: TrendUpFill,
      light: TrendUpLight,
      regular: TrendUpRegular,
      thin: TrendUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
