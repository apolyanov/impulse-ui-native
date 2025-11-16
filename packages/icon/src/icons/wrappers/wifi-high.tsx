import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiHighBold } from "../bold";
import { WifiHighDuotone } from "../duotone";
import { WifiHighFill } from "../fill";
import { WifiHighLight } from "../light";
import { WifiHighRegular } from "../regular";
import { WifiHighThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WifiHigh = memo(function WifiHigh(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiHighBold,
      duotone: WifiHighDuotone,
      fill: WifiHighFill,
      light: WifiHighLight,
      regular: WifiHighRegular,
      thin: WifiHighThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
