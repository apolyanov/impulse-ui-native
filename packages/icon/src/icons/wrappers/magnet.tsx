import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MagnetBold } from "../bold";
import { MagnetDuotone } from "../duotone";
import { MagnetFill } from "../fill";
import { MagnetLight } from "../light";
import { MagnetRegular } from "../regular";
import { MagnetThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Magnet = memo(function Magnet(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MagnetBold,
      duotone: MagnetDuotone,
      fill: MagnetFill,
      light: MagnetLight,
      regular: MagnetRegular,
      thin: MagnetThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
