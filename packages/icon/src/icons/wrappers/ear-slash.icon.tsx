import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EarSlashBoldIcon } from "../bold";
import { EarSlashDuotoneIcon } from "../duotone";
import { EarSlashFillIcon } from "../fill";
import { EarSlashLightIcon } from "../light";
import { EarSlashRegularIcon } from "../regular";
import { EarSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EarSlashIcon = memo(function EarSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EarSlashBoldIcon,
      duotone: EarSlashDuotoneIcon,
      fill: EarSlashFillIcon,
      light: EarSlashLightIcon,
      regular: EarSlashRegularIcon,
      thin: EarSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
