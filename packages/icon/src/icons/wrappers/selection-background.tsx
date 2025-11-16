import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionBackgroundBold } from "../bold";
import { SelectionBackgroundDuotone } from "../duotone";
import { SelectionBackgroundFill } from "../fill";
import { SelectionBackgroundLight } from "../light";
import { SelectionBackgroundRegular } from "../regular";
import { SelectionBackgroundThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionBackground = memo(function SelectionBackground(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionBackgroundBold,
      duotone: SelectionBackgroundDuotone,
      fill: SelectionBackgroundFill,
      light: SelectionBackgroundLight,
      regular: SelectionBackgroundRegular,
      thin: SelectionBackgroundThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
