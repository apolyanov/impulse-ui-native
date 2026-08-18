import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WifiMediumBoldIcon } from "../bold/wifi-medium-bold.icon";
import { WifiMediumDuotoneIcon } from "../duotone/wifi-medium-duotone.icon";
import { WifiMediumFillIcon } from "../fill/wifi-medium-fill.icon";
import { WifiMediumLightIcon } from "../light/wifi-medium-light.icon";
import { WifiMediumRegularIcon } from "../regular/wifi-medium-regular.icon";
import { WifiMediumThinIcon } from "../thin/wifi-medium-thin.icon";

export const WifiMediumIcon = memo(function WifiMedium(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiMediumBoldIcon,
      duotone: WifiMediumDuotoneIcon,
      fill: WifiMediumFillIcon,
      light: WifiMediumLightIcon,
      regular: WifiMediumRegularIcon,
      thin: WifiMediumThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
