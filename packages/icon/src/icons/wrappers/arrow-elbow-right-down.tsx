import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowRightDownBold } from "../bold";
import { ArrowElbowRightDownDuotone } from "../duotone";
import { ArrowElbowRightDownFill } from "../fill";
import { ArrowElbowRightDownLight } from "../light";
import { ArrowElbowRightDownRegular } from "../regular";
import { ArrowElbowRightDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowRightDown = memo(function ArrowElbowRightDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowRightDownBold,
      duotone: ArrowElbowRightDownDuotone,
      fill: ArrowElbowRightDownFill,
      light: ArrowElbowRightDownLight,
      regular: ArrowElbowRightDownRegular,
      thin: ArrowElbowRightDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
