import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleDownBold } from "../bold";
import { ArrowCircleDownDuotone } from "../duotone";
import { ArrowCircleDownFill } from "../fill";
import { ArrowCircleDownLight } from "../light";
import { ArrowCircleDownRegular } from "../regular";
import { ArrowCircleDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleDown = memo(function ArrowCircleDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleDownBold,
      duotone: ArrowCircleDownDuotone,
      fill: ArrowCircleDownFill,
      light: ArrowCircleDownLight,
      regular: ArrowCircleDownRegular,
      thin: ArrowCircleDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
