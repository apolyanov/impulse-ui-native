import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowRightUpBold } from "../bold";
import { ArrowElbowRightUpDuotone } from "../duotone";
import { ArrowElbowRightUpFill } from "../fill";
import { ArrowElbowRightUpLight } from "../light";
import { ArrowElbowRightUpRegular } from "../regular";
import { ArrowElbowRightUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowRightUp = memo(function ArrowElbowRightUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowRightUpBold,
      duotone: ArrowElbowRightUpDuotone,
      fill: ArrowElbowRightUpFill,
      light: ArrowElbowRightUpLight,
      regular: ArrowElbowRightUpRegular,
      thin: ArrowElbowRightUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
