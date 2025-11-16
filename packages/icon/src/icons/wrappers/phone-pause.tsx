import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PhonePauseBold } from "../bold";
import { PhonePauseDuotone } from "../duotone";
import { PhonePauseFill } from "../fill";
import { PhonePauseLight } from "../light";
import { PhonePauseRegular } from "../regular";
import { PhonePauseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PhonePause = memo(function PhonePause(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PhonePauseBold,
      duotone: PhonePauseDuotone,
      fill: PhonePauseFill,
      light: PhonePauseLight,
      regular: PhonePauseRegular,
      thin: PhonePauseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
