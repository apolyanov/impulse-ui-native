import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PercentBold } from "../bold";
import { PercentDuotone } from "../duotone";
import { PercentFill } from "../fill";
import { PercentLight } from "../light";
import { PercentRegular } from "../regular";
import { PercentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Percent = memo(function Percent(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PercentBold,
      duotone: PercentDuotone,
      fill: PercentFill,
      light: PercentLight,
      regular: PercentRegular,
      thin: PercentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
