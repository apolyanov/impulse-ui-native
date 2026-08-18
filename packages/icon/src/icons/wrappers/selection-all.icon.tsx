import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SelectionAllBoldIcon } from "../bold/selection-all-bold.icon";
import { SelectionAllDuotoneIcon } from "../duotone/selection-all-duotone.icon";
import { SelectionAllFillIcon } from "../fill/selection-all-fill.icon";
import { SelectionAllLightIcon } from "../light/selection-all-light.icon";
import { SelectionAllRegularIcon } from "../regular/selection-all-regular.icon";
import { SelectionAllThinIcon } from "../thin/selection-all-thin.icon";

export const SelectionAllIcon = memo(function SelectionAll(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionAllBoldIcon,
      duotone: SelectionAllDuotoneIcon,
      fill: SelectionAllFillIcon,
      light: SelectionAllLightIcon,
      regular: SelectionAllRegularIcon,
      thin: SelectionAllThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
