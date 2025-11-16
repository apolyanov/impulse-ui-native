import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleLeftBold } from "../bold";
import { ArrowCircleLeftDuotone } from "../duotone";
import { ArrowCircleLeftFill } from "../fill";
import { ArrowCircleLeftLight } from "../light";
import { ArrowCircleLeftRegular } from "../regular";
import { ArrowCircleLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleLeft = memo(function ArrowCircleLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleLeftBold,
      duotone: ArrowCircleLeftDuotone,
      fill: ArrowCircleLeftFill,
      light: ArrowCircleLeftLight,
      regular: ArrowCircleLeftRegular,
      thin: ArrowCircleLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
