import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GasCanBold } from "../bold";
import { GasCanDuotone } from "../duotone";
import { GasCanFill } from "../fill";
import { GasCanLight } from "../light";
import { GasCanRegular } from "../regular";
import { GasCanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GasCan = memo(function GasCan(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GasCanBold,
      duotone: GasCanDuotone,
      fill: GasCanFill,
      light: GasCanLight,
      regular: GasCanRegular,
      thin: GasCanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
