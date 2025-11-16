import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineLeftBold } from "../bold";
import { ArrowLineLeftDuotone } from "../duotone";
import { ArrowLineLeftFill } from "../fill";
import { ArrowLineLeftLight } from "../light";
import { ArrowLineLeftRegular } from "../regular";
import { ArrowLineLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineLeft = memo(function ArrowLineLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineLeftBold,
      duotone: ArrowLineLeftDuotone,
      fill: ArrowLineLeftFill,
      light: ArrowLineLeftLight,
      regular: ArrowLineLeftRegular,
      thin: ArrowLineLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
