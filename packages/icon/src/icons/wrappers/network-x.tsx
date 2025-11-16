import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NetworkXBold } from "../bold";
import { NetworkXDuotone } from "../duotone";
import { NetworkXFill } from "../fill";
import { NetworkXLight } from "../light";
import { NetworkXRegular } from "../regular";
import { NetworkXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NetworkX = memo(function NetworkX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NetworkXBold,
      duotone: NetworkXDuotone,
      fill: NetworkXFill,
      light: NetworkXLight,
      regular: NetworkXRegular,
      thin: NetworkXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
