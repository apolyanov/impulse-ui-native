import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NetworkBoldIcon } from "../bold";
import { NetworkDuotoneIcon } from "../duotone";
import { NetworkFillIcon } from "../fill";
import { NetworkLightIcon } from "../light";
import { NetworkRegularIcon } from "../regular";
import { NetworkThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
