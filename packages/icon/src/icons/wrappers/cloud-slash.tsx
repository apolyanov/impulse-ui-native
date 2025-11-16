import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CloudSlashBold } from "../bold";
import { CloudSlashDuotone } from "../duotone";
import { CloudSlashFill } from "../fill";
import { CloudSlashLight } from "../light";
import { CloudSlashRegular } from "../regular";
import { CloudSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CloudSlash = memo(function CloudSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CloudSlashBold,
      duotone: CloudSlashDuotone,
      fill: CloudSlashFill,
      light: CloudSlashLight,
      regular: CloudSlashRegular,
      thin: CloudSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
