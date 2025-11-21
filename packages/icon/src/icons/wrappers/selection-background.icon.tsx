import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SelectionBackgroundBoldIcon } from "../bold";
import { SelectionBackgroundDuotoneIcon } from "../duotone";
import { SelectionBackgroundFillIcon } from "../fill";
import { SelectionBackgroundLightIcon } from "../light";
import { SelectionBackgroundRegularIcon } from "../regular";
import { SelectionBackgroundThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SelectionBackgroundIcon = memo(function SelectionBackground(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionBackgroundBoldIcon,
      duotone: SelectionBackgroundDuotoneIcon,
      fill: SelectionBackgroundFillIcon,
      light: SelectionBackgroundLightIcon,
      regular: SelectionBackgroundRegularIcon,
      thin: SelectionBackgroundThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
