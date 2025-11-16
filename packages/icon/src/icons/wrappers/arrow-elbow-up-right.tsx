import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowUpRightBold } from "../bold";
import { ArrowElbowUpRightDuotone } from "../duotone";
import { ArrowElbowUpRightFill } from "../fill";
import { ArrowElbowUpRightLight } from "../light";
import { ArrowElbowUpRightRegular } from "../regular";
import { ArrowElbowUpRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowUpRight = memo(function ArrowElbowUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowUpRightBold,
      duotone: ArrowElbowUpRightDuotone,
      fill: ArrowElbowUpRightFill,
      light: ArrowElbowUpRightLight,
      regular: ArrowElbowUpRightRegular,
      thin: ArrowElbowUpRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
