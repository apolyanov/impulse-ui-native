import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MagnetBoldIcon } from "../bold/magnet-bold.icon";
import { MagnetDuotoneIcon } from "../duotone/magnet-duotone.icon";
import { MagnetFillIcon } from "../fill/magnet-fill.icon";
import { MagnetLightIcon } from "../light/magnet-light.icon";
import { MagnetRegularIcon } from "../regular/magnet-regular.icon";
import { MagnetThinIcon } from "../thin/magnet-thin.icon";

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
