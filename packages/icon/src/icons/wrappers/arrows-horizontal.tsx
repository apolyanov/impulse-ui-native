import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsHorizontalBold } from "../bold";
import { ArrowsHorizontalDuotone } from "../duotone";
import { ArrowsHorizontalFill } from "../fill";
import { ArrowsHorizontalLight } from "../light";
import { ArrowsHorizontalRegular } from "../regular";
import { ArrowsHorizontalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsHorizontal = memo(function ArrowsHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsHorizontalBold,
      duotone: ArrowsHorizontalDuotone,
      fill: ArrowsHorizontalFill,
      light: ArrowsHorizontalLight,
      regular: ArrowsHorizontalRegular,
      thin: ArrowsHorizontalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
