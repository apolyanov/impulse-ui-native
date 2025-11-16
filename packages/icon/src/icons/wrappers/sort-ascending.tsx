import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SortAscendingBold } from "../bold";
import { SortAscendingDuotone } from "../duotone";
import { SortAscendingFill } from "../fill";
import { SortAscendingLight } from "../light";
import { SortAscendingRegular } from "../regular";
import { SortAscendingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SortAscending = memo(function SortAscending(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SortAscendingBold,
      duotone: SortAscendingDuotone,
      fill: SortAscendingFill,
      light: SortAscendingLight,
      regular: SortAscendingRegular,
      thin: SortAscendingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
