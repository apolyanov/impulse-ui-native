import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineUpLeftBold } from "../bold";
import { ArrowLineUpLeftDuotone } from "../duotone";
import { ArrowLineUpLeftFill } from "../fill";
import { ArrowLineUpLeftLight } from "../light";
import { ArrowLineUpLeftRegular } from "../regular";
import { ArrowLineUpLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineUpLeft = memo(function ArrowLineUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineUpLeftBold,
      duotone: ArrowLineUpLeftDuotone,
      fill: ArrowLineUpLeftFill,
      light: ArrowLineUpLeftLight,
      regular: ArrowLineUpLeftRegular,
      thin: ArrowLineUpLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
