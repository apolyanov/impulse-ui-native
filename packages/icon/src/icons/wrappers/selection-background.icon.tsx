import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SelectionBackgroundBoldIcon } from "../bold/selection-background-bold.icon";
import { SelectionBackgroundDuotoneIcon } from "../duotone/selection-background-duotone.icon";
import { SelectionBackgroundFillIcon } from "../fill/selection-background-fill.icon";
import { SelectionBackgroundLightIcon } from "../light/selection-background-light.icon";
import { SelectionBackgroundRegularIcon } from "../regular/selection-background-regular.icon";
import { SelectionBackgroundThinIcon } from "../thin/selection-background-thin.icon";

export const SelectionBackgroundIcon = memo(function SelectionBackground(
  props: IconWrapperProps,
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
