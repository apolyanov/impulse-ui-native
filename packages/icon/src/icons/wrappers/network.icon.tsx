import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NetworkBoldIcon } from "../bold/network-bold.icon";
import { NetworkDuotoneIcon } from "../duotone/network-duotone.icon";
import { NetworkFillIcon } from "../fill/network-fill.icon";
import { NetworkLightIcon } from "../light/network-light.icon";
import { NetworkRegularIcon } from "../regular/network-regular.icon";
import { NetworkThinIcon } from "../thin/network-thin.icon";

export const NetworkIcon = memo(function Network(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NetworkBoldIcon,
      duotone: NetworkDuotoneIcon,
      fill: NetworkFillIcon,
      light: NetworkLightIcon,
      regular: NetworkRegularIcon,
      thin: NetworkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
