import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsOutLineHorizontalBold } from "../bold";
import { ArrowsOutLineHorizontalDuotone } from "../duotone";
import { ArrowsOutLineHorizontalFill } from "../fill";
import { ArrowsOutLineHorizontalLight } from "../light";
import { ArrowsOutLineHorizontalRegular } from "../regular";
import { ArrowsOutLineHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsOutLineHorizontal = memo(function ArrowsOutLineHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutLineHorizontalBold,
      duotone: ArrowsOutLineHorizontalDuotone,
      fill: ArrowsOutLineHorizontalFill,
      light: ArrowsOutLineHorizontalLight,
      regular: ArrowsOutLineHorizontalRegular,
      thin: ArrowsOutLineHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
