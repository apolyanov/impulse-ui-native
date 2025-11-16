import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NetworkSlashBold } from "../bold";
import { NetworkSlashDuotone } from "../duotone";
import { NetworkSlashFill } from "../fill";
import { NetworkSlashLight } from "../light";
import { NetworkSlashRegular } from "../regular";
import { NetworkSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NetworkSlash = memo(function NetworkSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NetworkSlashBold,
      duotone: NetworkSlashDuotone,
      fill: NetworkSlashFill,
      light: NetworkSlashLight,
      regular: NetworkSlashRegular,
      thin: NetworkSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
