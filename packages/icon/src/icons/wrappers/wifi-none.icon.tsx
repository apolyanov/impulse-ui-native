import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WifiNoneBoldIcon } from "../bold/wifi-none-bold.icon";
import { WifiNoneDuotoneIcon } from "../duotone/wifi-none-duotone.icon";
import { WifiNoneFillIcon } from "../fill/wifi-none-fill.icon";
import { WifiNoneLightIcon } from "../light/wifi-none-light.icon";
import { WifiNoneRegularIcon } from "../regular/wifi-none-regular.icon";
import { WifiNoneThinIcon } from "../thin/wifi-none-thin.icon";

export const WifiNoneIcon = memo(function WifiNone(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiNoneBoldIcon,
      duotone: WifiNoneDuotoneIcon,
      fill: WifiNoneFillIcon,
      light: WifiNoneLightIcon,
      regular: WifiNoneRegularIcon,
      thin: WifiNoneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
