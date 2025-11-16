import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PencilSimpleSlashBold } from "../bold";
import { PencilSimpleSlashDuotone } from "../duotone";
import { PencilSimpleSlashFill } from "../fill";
import { PencilSimpleSlashLight } from "../light";
import { PencilSimpleSlashRegular } from "../regular";
import { PencilSimpleSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PencilSimpleSlash = memo(function PencilSimpleSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilSimpleSlashBold,
      duotone: PencilSimpleSlashDuotone,
      fill: PencilSimpleSlashFill,
      light: PencilSimpleSlashLight,
      regular: PencilSimpleSlashRegular,
      thin: PencilSimpleSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
