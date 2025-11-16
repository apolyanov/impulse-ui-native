import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineDownRightBold } from "../bold";
import { ArrowLineDownRightDuotone } from "../duotone";
import { ArrowLineDownRightFill } from "../fill";
import { ArrowLineDownRightLight } from "../light";
import { ArrowLineDownRightRegular } from "../regular";
import { ArrowLineDownRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineDownRight = memo(function ArrowLineDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineDownRightBold,
      duotone: ArrowLineDownRightDuotone,
      fill: ArrowLineDownRightFill,
      light: ArrowLineDownRightLight,
      regular: ArrowLineDownRightRegular,
      thin: ArrowLineDownRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
