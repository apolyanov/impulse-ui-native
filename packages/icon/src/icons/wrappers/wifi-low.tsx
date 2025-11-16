import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiLowBold } from "../bold";
import { WifiLowDuotone } from "../duotone";
import { WifiLowFill } from "../fill";
import { WifiLowLight } from "../light";
import { WifiLowRegular } from "../regular";
import { WifiLowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WifiLow = memo(function WifiLow(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiLowBold,
      duotone: WifiLowDuotone,
      fill: WifiLowFill,
      light: WifiLowLight,
      regular: WifiLowRegular,
      thin: WifiLowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
