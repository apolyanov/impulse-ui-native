import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineDownBold } from "../bold";
import { ArrowLineDownDuotone } from "../duotone";
import { ArrowLineDownFill } from "../fill";
import { ArrowLineDownLight } from "../light";
import { ArrowLineDownRegular } from "../regular";
import { ArrowLineDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineDown = memo(function ArrowLineDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineDownBold,
      duotone: ArrowLineDownDuotone,
      fill: ArrowLineDownFill,
      light: ArrowLineDownLight,
      regular: ArrowLineDownRegular,
      thin: ArrowLineDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
