import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleRightBold } from "../bold";
import { ArrowCircleRightDuotone } from "../duotone";
import { ArrowCircleRightFill } from "../fill";
import { ArrowCircleRightLight } from "../light";
import { ArrowCircleRightRegular } from "../regular";
import { ArrowCircleRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleRight = memo(function ArrowCircleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleRightBold,
      duotone: ArrowCircleRightDuotone,
      fill: ArrowCircleRightFill,
      light: ArrowCircleRightLight,
      regular: ArrowCircleRightRegular,
      thin: ArrowCircleRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
