import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsInLineHorizontalBold } from "../bold";
import { ArrowsInLineHorizontalDuotone } from "../duotone";
import { ArrowsInLineHorizontalFill } from "../fill";
import { ArrowsInLineHorizontalLight } from "../light";
import { ArrowsInLineHorizontalRegular } from "../regular";
import { ArrowsInLineHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsInLineHorizontal = memo(function ArrowsInLineHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInLineHorizontalBold,
      duotone: ArrowsInLineHorizontalDuotone,
      fill: ArrowsInLineHorizontalFill,
      light: ArrowsInLineHorizontalLight,
      regular: ArrowsInLineHorizontalRegular,
      thin: ArrowsInLineHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
