import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WifiHighBoldIcon } from "../bold/wifi-high-bold.icon";
import { WifiHighDuotoneIcon } from "../duotone/wifi-high-duotone.icon";
import { WifiHighFillIcon } from "../fill/wifi-high-fill.icon";
import { WifiHighLightIcon } from "../light/wifi-high-light.icon";
import { WifiHighRegularIcon } from "../regular/wifi-high-regular.icon";
import { WifiHighThinIcon } from "../thin/wifi-high-thin.icon";

export const WifiHighIcon = memo(function WifiHigh(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiHighBoldIcon,
      duotone: WifiHighDuotoneIcon,
      fill: WifiHighFillIcon,
      light: WifiHighLightIcon,
      regular: WifiHighRegularIcon,
      thin: WifiHighThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
