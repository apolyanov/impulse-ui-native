import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleUpRightBold } from "../bold";
import { ArrowCircleUpRightDuotone } from "../duotone";
import { ArrowCircleUpRightFill } from "../fill";
import { ArrowCircleUpRightLight } from "../light";
import { ArrowCircleUpRightRegular } from "../regular";
import { ArrowCircleUpRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleUpRight = memo(function ArrowCircleUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleUpRightBold,
      duotone: ArrowCircleUpRightDuotone,
      fill: ArrowCircleUpRightFill,
      light: ArrowCircleUpRightLight,
      regular: ArrowCircleUpRightRegular,
      thin: ArrowCircleUpRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
