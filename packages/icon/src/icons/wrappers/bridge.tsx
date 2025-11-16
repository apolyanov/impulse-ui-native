import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BridgeBold } from "../bold";
import { BridgeDuotone } from "../duotone";
import { BridgeFill } from "../fill";
import { BridgeLight } from "../light";
import { BridgeRegular } from "../regular";
import { BridgeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Bridge = memo(function Bridge(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BridgeBold,
      duotone: BridgeDuotone,
      fill: BridgeFill,
      light: BridgeLight,
      regular: BridgeRegular,
      thin: BridgeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
