import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextTSlashBold } from "../bold";
import { TextTSlashDuotone } from "../duotone";
import { TextTSlashFill } from "../fill";
import { TextTSlashLight } from "../light";
import { TextTSlashRegular } from "../regular";
import { TextTSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextTSlash = memo(function TextTSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextTSlashBold,
      duotone: TextTSlashDuotone,
      fill: TextTSlashFill,
      light: TextTSlashLight,
      regular: TextTSlashRegular,
      thin: TextTSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
