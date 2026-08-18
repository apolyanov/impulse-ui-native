import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShareNetworkBoldIcon } from "../bold/share-network-bold.icon";
import { ShareNetworkDuotoneIcon } from "../duotone/share-network-duotone.icon";
import { ShareNetworkFillIcon } from "../fill/share-network-fill.icon";
import { ShareNetworkLightIcon } from "../light/share-network-light.icon";
import { ShareNetworkRegularIcon } from "../regular/share-network-regular.icon";
import { ShareNetworkThinIcon } from "../thin/share-network-thin.icon";

export const ShareNetworkIcon = memo(function ShareNetwork(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShareNetworkBoldIcon,
      duotone: ShareNetworkDuotoneIcon,
      fill: ShareNetworkFillIcon,
      light: ShareNetworkLightIcon,
      regular: ShareNetworkRegularIcon,
      thin: ShareNetworkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
