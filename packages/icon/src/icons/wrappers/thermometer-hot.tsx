import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ThermometerHotBold } from "../bold";
import { ThermometerHotDuotone } from "../duotone";
import { ThermometerHotFill } from "../fill";
import { ThermometerHotLight } from "../light";
import { ThermometerHotRegular } from "../regular";
import { ThermometerHotThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ThermometerHot = memo(function ThermometerHot(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ThermometerHotBold,
      duotone: ThermometerHotDuotone,
      fill: ThermometerHotFill,
      light: ThermometerHotLight,
      regular: ThermometerHotRegular,
      thin: ThermometerHotThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
