import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowArcRightBold } from "../bold";
import { ArrowArcRightDuotone } from "../duotone";
import { ArrowArcRightFill } from "../fill";
import { ArrowArcRightLight } from "../light";
import { ArrowArcRightRegular } from "../regular";
import { ArrowArcRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowArcRight = memo(function ArrowArcRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowArcRightBold,
      duotone: ArrowArcRightDuotone,
      fill: ArrowArcRightFill,
      light: ArrowArcRightLight,
      regular: ArrowArcRightRegular,
      thin: ArrowArcRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
