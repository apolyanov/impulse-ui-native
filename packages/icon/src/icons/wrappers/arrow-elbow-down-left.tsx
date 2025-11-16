import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowDownLeftBold } from "../bold";
import { ArrowElbowDownLeftDuotone } from "../duotone";
import { ArrowElbowDownLeftFill } from "../fill";
import { ArrowElbowDownLeftLight } from "../light";
import { ArrowElbowDownLeftRegular } from "../regular";
import { ArrowElbowDownLeftThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowDownLeft = memo(function ArrowElbowDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowDownLeftBold,
      duotone: ArrowElbowDownLeftDuotone,
      fill: ArrowElbowDownLeftFill,
      light: ArrowElbowDownLeftLight,
      regular: ArrowElbowDownLeftRegular,
      thin: ArrowElbowDownLeftThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
