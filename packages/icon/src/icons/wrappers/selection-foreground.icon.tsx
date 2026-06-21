import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SelectionForegroundBoldIcon } from "../bold";
import { SelectionForegroundDuotoneIcon } from "../duotone";
import { SelectionForegroundFillIcon } from "../fill";
import { SelectionForegroundLightIcon } from "../light";
import { SelectionForegroundRegularIcon } from "../regular";
import { SelectionForegroundThinIcon } from "../thin";

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
