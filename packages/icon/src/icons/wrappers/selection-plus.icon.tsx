import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SelectionPlusBoldIcon } from "../bold/selection-plus-bold.icon";
import { SelectionPlusDuotoneIcon } from "../duotone/selection-plus-duotone.icon";
import { SelectionPlusFillIcon } from "../fill/selection-plus-fill.icon";
import { SelectionPlusLightIcon } from "../light/selection-plus-light.icon";
import { SelectionPlusRegularIcon } from "../regular/selection-plus-regular.icon";
import { SelectionPlusThinIcon } from "../thin/selection-plus-thin.icon";

export const SelectionPlusIcon = memo(function SelectionPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SelectionPlusBoldIcon,
      duotone: SelectionPlusDuotoneIcon,
      fill: SelectionPlusFillIcon,
      light: SelectionPlusLightIcon,
      regular: SelectionPlusRegularIcon,
      thin: SelectionPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
