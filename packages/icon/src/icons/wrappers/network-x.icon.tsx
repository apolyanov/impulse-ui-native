import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NetworkXBoldIcon } from "../bold/network-x-bold.icon";
import { NetworkXDuotoneIcon } from "../duotone/network-x-duotone.icon";
import { NetworkXFillIcon } from "../fill/network-x-fill.icon";
import { NetworkXLightIcon } from "../light/network-x-light.icon";
import { NetworkXRegularIcon } from "../regular/network-x-regular.icon";
import { NetworkXThinIcon } from "../thin/network-x-thin.icon";

export const NetworkXIcon = memo(function NetworkX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NetworkXBoldIcon,
      duotone: NetworkXDuotoneIcon,
      fill: NetworkXFillIcon,
      light: NetworkXLightIcon,
      regular: NetworkXRegularIcon,
      thin: NetworkXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
