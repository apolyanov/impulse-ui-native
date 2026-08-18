import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SortDescendingBoldIcon } from "../bold/sort-descending-bold.icon";
import { SortDescendingDuotoneIcon } from "../duotone/sort-descending-duotone.icon";
import { SortDescendingFillIcon } from "../fill/sort-descending-fill.icon";
import { SortDescendingLightIcon } from "../light/sort-descending-light.icon";
import { SortDescendingRegularIcon } from "../regular/sort-descending-regular.icon";
import { SortDescendingThinIcon } from "../thin/sort-descending-thin.icon";

export const SortDescendingIcon = memo(function SortDescending(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SortDescendingBoldIcon,
      duotone: SortDescendingDuotoneIcon,
      fill: SortDescendingFillIcon,
      light: SortDescendingLightIcon,
      regular: SortDescendingRegularIcon,
      thin: SortDescendingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
