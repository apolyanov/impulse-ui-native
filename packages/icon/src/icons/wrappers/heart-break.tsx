import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HeartBreakBold } from "../bold";
import { HeartBreakDuotone } from "../duotone";
import { HeartBreakFill } from "../fill";
import { HeartBreakLight } from "../light";
import { HeartBreakRegular } from "../regular";
import { HeartBreakThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HeartBreak = memo(function HeartBreak(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HeartBreakBold,
      duotone: HeartBreakDuotone,
      fill: HeartBreakFill,
      light: HeartBreakLight,
      regular: HeartBreakRegular,
      thin: HeartBreakThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
