import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineUpRightBold } from "../bold";
import { ArrowLineUpRightDuotone } from "../duotone";
import { ArrowLineUpRightFill } from "../fill";
import { ArrowLineUpRightLight } from "../light";
import { ArrowLineUpRightRegular } from "../regular";
import { ArrowLineUpRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineUpRight = memo(function ArrowLineUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineUpRightBold,
      duotone: ArrowLineUpRightDuotone,
      fill: ArrowLineUpRightFill,
      light: ArrowLineUpRightLight,
      regular: ArrowLineUpRightRegular,
      thin: ArrowLineUpRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
