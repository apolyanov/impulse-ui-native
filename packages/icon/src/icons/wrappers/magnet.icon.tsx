import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagnetBoldIcon } from "../bold";
import { MagnetDuotoneIcon } from "../duotone";
import { MagnetFillIcon } from "../fill";
import { MagnetLightIcon } from "../light";
import { MagnetRegularIcon } from "../regular";
import { MagnetThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MagnetIcon = memo(function Magnet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnetBoldIcon,
      duotone: MagnetDuotoneIcon,
      fill: MagnetFillIcon,
      light: MagnetLightIcon,
      regular: MagnetRegularIcon,
      thin: MagnetThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
