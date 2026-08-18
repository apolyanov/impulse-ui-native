import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SelectionBoldIcon } from "../bold/selection-bold.icon";
import { SelectionDuotoneIcon } from "../duotone/selection-duotone.icon";
import { SelectionFillIcon } from "../fill/selection-fill.icon";
import { SelectionLightIcon } from "../light/selection-light.icon";
import { SelectionRegularIcon } from "../regular/selection-regular.icon";
import { SelectionThinIcon } from "../thin/selection-thin.icon";

export const SelectionIcon = memo(function Selection(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionBoldIcon,
      duotone: SelectionDuotoneIcon,
      fill: SelectionFillIcon,
      light: SelectionLightIcon,
      regular: SelectionRegularIcon,
      thin: SelectionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
