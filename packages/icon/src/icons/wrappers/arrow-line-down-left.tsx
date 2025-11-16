import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineDownLeftBold } from "../bold";
import { ArrowLineDownLeftDuotone } from "../duotone";
import { ArrowLineDownLeftFill } from "../fill";
import { ArrowLineDownLeftLight } from "../light";
import { ArrowLineDownLeftRegular } from "../regular";
import { ArrowLineDownLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineDownLeft = memo(function ArrowLineDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineDownLeftBold,
      duotone: ArrowLineDownLeftDuotone,
      fill: ArrowLineDownLeftFill,
      light: ArrowLineDownLeftLight,
      regular: ArrowLineDownLeftRegular,
      thin: ArrowLineDownLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
