import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowUpLeftBold } from "../bold";
import { ArrowElbowUpLeftDuotone } from "../duotone";
import { ArrowElbowUpLeftFill } from "../fill";
import { ArrowElbowUpLeftLight } from "../light";
import { ArrowElbowUpLeftRegular } from "../regular";
import { ArrowElbowUpLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowUpLeft = memo(function ArrowElbowUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowUpLeftBold,
      duotone: ArrowElbowUpLeftDuotone,
      fill: ArrowElbowUpLeftFill,
      light: ArrowElbowUpLeftLight,
      regular: ArrowElbowUpLeftRegular,
      thin: ArrowElbowUpLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
