import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThermometerColdBold } from "../bold";
import { ThermometerColdDuotone } from "../duotone";
import { ThermometerColdFill } from "../fill";
import { ThermometerColdLight } from "../light";
import { ThermometerColdRegular } from "../regular";
import { ThermometerColdThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThermometerCold = memo(function ThermometerCold(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThermometerColdBold,
      duotone: ThermometerColdDuotone,
      fill: ThermometerColdFill,
      light: ThermometerColdLight,
      regular: ThermometerColdRegular,
      thin: ThermometerColdThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
