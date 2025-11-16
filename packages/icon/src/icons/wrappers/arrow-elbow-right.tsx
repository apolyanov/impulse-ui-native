import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowRightBold } from "../bold";
import { ArrowElbowRightDuotone } from "../duotone";
import { ArrowElbowRightFill } from "../fill";
import { ArrowElbowRightLight } from "../light";
import { ArrowElbowRightRegular } from "../regular";
import { ArrowElbowRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowRight = memo(function ArrowElbowRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowRightBold,
      duotone: ArrowElbowRightDuotone,
      fill: ArrowElbowRightFill,
      light: ArrowElbowRightLight,
      regular: ArrowElbowRightRegular,
      thin: ArrowElbowRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
