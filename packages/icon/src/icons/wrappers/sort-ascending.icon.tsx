import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SortAscendingBoldIcon } from "../bold/sort-ascending-bold.icon";
import { SortAscendingDuotoneIcon } from "../duotone/sort-ascending-duotone.icon";
import { SortAscendingFillIcon } from "../fill/sort-ascending-fill.icon";
import { SortAscendingLightIcon } from "../light/sort-ascending-light.icon";
import { SortAscendingRegularIcon } from "../regular/sort-ascending-regular.icon";
import { SortAscendingThinIcon } from "../thin/sort-ascending-thin.icon";

export const SortAscendingIcon = memo(function SortAscending(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SortAscendingBoldIcon,
      duotone: SortAscendingDuotoneIcon,
      fill: SortAscendingFillIcon,
      light: SortAscendingLightIcon,
      regular: SortAscendingRegularIcon,
      thin: SortAscendingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
