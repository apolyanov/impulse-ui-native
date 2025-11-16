import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShareNetworkBold } from "../bold";
import { ShareNetworkDuotone } from "../duotone";
import { ShareNetworkFill } from "../fill";
import { ShareNetworkLight } from "../light";
import { ShareNetworkRegular } from "../regular";
import { ShareNetworkThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShareNetwork = memo(function ShareNetwork(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShareNetworkBold,
      duotone: ShareNetworkDuotone,
      fill: ShareNetworkFill,
      light: ShareNetworkLight,
      regular: ShareNetworkRegular,
      thin: ShareNetworkThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
