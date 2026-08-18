import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SelectionForegroundBoldIcon } from "../bold/selection-foreground-bold.icon";
import { SelectionForegroundDuotoneIcon } from "../duotone/selection-foreground-duotone.icon";
import { SelectionForegroundFillIcon } from "../fill/selection-foreground-fill.icon";
import { SelectionForegroundLightIcon } from "../light/selection-foreground-light.icon";
import { SelectionForegroundRegularIcon } from "../regular/selection-foreground-regular.icon";
import { SelectionForegroundThinIcon } from "../thin/selection-foreground-thin.icon";

export const SelectionForegroundIcon = memo(function SelectionForeground(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionForegroundBoldIcon,
      duotone: SelectionForegroundDuotoneIcon,
      fill: SelectionForegroundFillIcon,
      light: SelectionForegroundLightIcon,
      regular: SelectionForegroundRegularIcon,
      thin: SelectionForegroundThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
