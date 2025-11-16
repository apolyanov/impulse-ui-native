import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EyeSlashBold } from "../bold";
import { EyeSlashDuotone } from "../duotone";
import { EyeSlashFill } from "../fill";
import { EyeSlashLight } from "../light";
import { EyeSlashRegular } from "../regular";
import { EyeSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EyeSlash = memo(function EyeSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EyeSlashBold,
      duotone: EyeSlashDuotone,
      fill: EyeSlashFill,
      light: EyeSlashLight,
      regular: EyeSlashRegular,
      thin: EyeSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
