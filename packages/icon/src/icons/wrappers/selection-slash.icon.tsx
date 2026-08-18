import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SelectionSlashBoldIcon } from "../bold/selection-slash-bold.icon";
import { SelectionSlashDuotoneIcon } from "../duotone/selection-slash-duotone.icon";
import { SelectionSlashFillIcon } from "../fill/selection-slash-fill.icon";
import { SelectionSlashLightIcon } from "../light/selection-slash-light.icon";
import { SelectionSlashRegularIcon } from "../regular/selection-slash-regular.icon";
import { SelectionSlashThinIcon } from "../thin/selection-slash-thin.icon";

export const SelectionSlashIcon = memo(function SelectionSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionSlashBoldIcon,
      duotone: SelectionSlashDuotoneIcon,
      fill: SelectionSlashFillIcon,
      light: SelectionSlashLightIcon,
      regular: SelectionSlashRegularIcon,
      thin: SelectionSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
