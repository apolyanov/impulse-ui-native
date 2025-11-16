import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleUpLeftBold } from "../bold";
import { ArrowCircleUpLeftDuotone } from "../duotone";
import { ArrowCircleUpLeftFill } from "../fill";
import { ArrowCircleUpLeftLight } from "../light";
import { ArrowCircleUpLeftRegular } from "../regular";
import { ArrowCircleUpLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleUpLeft = memo(function ArrowCircleUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleUpLeftBold,
      duotone: ArrowCircleUpLeftDuotone,
      fill: ArrowCircleUpLeftFill,
      light: ArrowCircleUpLeftLight,
      regular: ArrowCircleUpLeftRegular,
      thin: ArrowCircleUpLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
