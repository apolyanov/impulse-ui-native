import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionForegroundBold } from "../bold";
import { SelectionForegroundDuotone } from "../duotone";
import { SelectionForegroundFill } from "../fill";
import { SelectionForegroundLight } from "../light";
import { SelectionForegroundRegular } from "../regular";
import { SelectionForegroundThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionForeground = memo(function SelectionForeground(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionForegroundBold,
      duotone: SelectionForegroundDuotone,
      fill: SelectionForegroundFill,
      light: SelectionForegroundLight,
      regular: SelectionForegroundRegular,
      thin: SelectionForegroundThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
