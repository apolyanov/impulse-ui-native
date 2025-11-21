import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiXBoldIcon } from "../bold";
import { WifiXDuotoneIcon } from "../duotone";
import { WifiXFillIcon } from "../fill";
import { WifiXLightIcon } from "../light";
import { WifiXRegularIcon } from "../regular";
import { WifiXThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WifiXIcon = memo(function WifiX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiXBoldIcon,
      duotone: WifiXDuotoneIcon,
      fill: WifiXFillIcon,
      light: WifiXLightIcon,
      regular: WifiXRegularIcon,
      thin: WifiXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
