import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiHighBoldIcon } from "../bold";
import { WifiHighDuotoneIcon } from "../duotone";
import { WifiHighFillIcon } from "../fill";
import { WifiHighLightIcon } from "../light";
import { WifiHighRegularIcon } from "../regular";
import { WifiHighThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
