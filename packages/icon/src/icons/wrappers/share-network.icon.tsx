import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShareNetworkBoldIcon } from "../bold";
import { ShareNetworkDuotoneIcon } from "../duotone";
import { ShareNetworkFillIcon } from "../fill";
import { ShareNetworkLightIcon } from "../light";
import { ShareNetworkRegularIcon } from "../regular";
import { ShareNetworkThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShareNetworkIcon = memo(function ShareNetwork(
  props: IconWrapperProps
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
