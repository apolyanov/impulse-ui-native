import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SortDescendingBold } from "../bold";
import { SortDescendingDuotone } from "../duotone";
import { SortDescendingFill } from "../fill";
import { SortDescendingLight } from "../light";
import { SortDescendingRegular } from "../regular";
import { SortDescendingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SortDescending = memo(function SortDescending(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SortDescendingBold,
      duotone: SortDescendingDuotone,
      fill: SortDescendingFill,
      light: SortDescendingLight,
      regular: SortDescendingRegular,
      thin: SortDescendingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
