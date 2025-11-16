import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WifiSlashBold } from "../bold";
import { WifiSlashDuotone } from "../duotone";
import { WifiSlashFill } from "../fill";
import { WifiSlashLight } from "../light";
import { WifiSlashRegular } from "../regular";
import { WifiSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WifiSlash = memo(function WifiSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WifiSlashBold,
      duotone: WifiSlashDuotone,
      fill: WifiSlashFill,
      light: WifiSlashLight,
      regular: WifiSlashRegular,
      thin: WifiSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
