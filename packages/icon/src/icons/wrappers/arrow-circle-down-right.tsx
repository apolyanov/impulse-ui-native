import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleDownRightBold } from "../bold";
import { ArrowCircleDownRightDuotone } from "../duotone";
import { ArrowCircleDownRightFill } from "../fill";
import { ArrowCircleDownRightLight } from "../light";
import { ArrowCircleDownRightRegular } from "../regular";
import { ArrowCircleDownRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleDownRight = memo(function ArrowCircleDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleDownRightBold,
      duotone: ArrowCircleDownRightDuotone,
      fill: ArrowCircleDownRightFill,
      light: ArrowCircleDownRightLight,
      regular: ArrowCircleDownRightRegular,
      thin: ArrowCircleDownRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
