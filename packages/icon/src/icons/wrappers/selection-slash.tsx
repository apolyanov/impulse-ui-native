import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionSlashBold } from "../bold";
import { SelectionSlashDuotone } from "../duotone";
import { SelectionSlashFill } from "../fill";
import { SelectionSlashLight } from "../light";
import { SelectionSlashRegular } from "../regular";
import { SelectionSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionSlash = memo(function SelectionSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionSlashBold,
      duotone: SelectionSlashDuotone,
      fill: SelectionSlashFill,
      light: SelectionSlashLight,
      regular: SelectionSlashRegular,
      thin: SelectionSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
