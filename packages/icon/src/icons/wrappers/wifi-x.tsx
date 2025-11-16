import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiXBold } from "../bold";
import { WifiXDuotone } from "../duotone";
import { WifiXFill } from "../fill";
import { WifiXLight } from "../light";
import { WifiXRegular } from "../regular";
import { WifiXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WifiX = memo(function WifiX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiXBold,
      duotone: WifiXDuotone,
      fill: WifiXFill,
      light: WifiXLight,
      regular: WifiXRegular,
      thin: WifiXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
