import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowLeftBold } from "../bold";
import { ArrowElbowLeftDuotone } from "../duotone";
import { ArrowElbowLeftFill } from "../fill";
import { ArrowElbowLeftLight } from "../light";
import { ArrowElbowLeftRegular } from "../regular";
import { ArrowElbowLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowLeft = memo(function ArrowElbowLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowLeftBold,
      duotone: ArrowElbowLeftDuotone,
      fill: ArrowElbowLeftFill,
      light: ArrowElbowLeftLight,
      regular: ArrowElbowLeftRegular,
      thin: ArrowElbowLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
