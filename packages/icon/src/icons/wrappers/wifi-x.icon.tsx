import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WifiXBoldIcon } from "../bold/wifi-x-bold.icon";
import { WifiXDuotoneIcon } from "../duotone/wifi-x-duotone.icon";
import { WifiXFillIcon } from "../fill/wifi-x-fill.icon";
import { WifiXLightIcon } from "../light/wifi-x-light.icon";
import { WifiXRegularIcon } from "../regular/wifi-x-regular.icon";
import { WifiXThinIcon } from "../thin/wifi-x-thin.icon";

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
