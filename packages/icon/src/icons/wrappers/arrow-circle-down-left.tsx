import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleDownLeftBold } from "../bold";
import { ArrowCircleDownLeftDuotone } from "../duotone";
import { ArrowCircleDownLeftFill } from "../fill";
import { ArrowCircleDownLeftLight } from "../light";
import { ArrowCircleDownLeftRegular } from "../regular";
import { ArrowCircleDownLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleDownLeft = memo(function ArrowCircleDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleDownLeftBold,
      duotone: ArrowCircleDownLeftDuotone,
      fill: ArrowCircleDownLeftFill,
      light: ArrowCircleDownLeftLight,
      regular: ArrowCircleDownLeftRegular,
      thin: ArrowCircleDownLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
