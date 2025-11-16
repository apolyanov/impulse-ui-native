import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilSlashBold } from "../bold";
import { PencilSlashDuotone } from "../duotone";
import { PencilSlashFill } from "../fill";
import { PencilSlashLight } from "../light";
import { PencilSlashRegular } from "../regular";
import { PencilSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilSlash = memo(function PencilSlash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilSlashBold,
      duotone: PencilSlashDuotone,
      fill: PencilSlashFill,
      light: PencilSlashLight,
      regular: PencilSlashRegular,
      thin: PencilSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
