import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BridgeBoldIcon } from "../bold";
import { BridgeDuotoneIcon } from "../duotone";
import { BridgeFillIcon } from "../fill";
import { BridgeLightIcon } from "../light";
import { BridgeRegularIcon } from "../regular";
import { BridgeThinIcon } from "../thin";

export const BridgeIcon = memo(function Bridge(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BridgeBoldIcon,
      duotone: BridgeDuotoneIcon,
      fill: BridgeFillIcon,
      light: BridgeLightIcon,
      regular: BridgeRegularIcon,
      thin: BridgeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
