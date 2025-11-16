import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RepeatBold } from "../bold";
import { RepeatDuotone } from "../duotone";
import { RepeatFill } from "../fill";
import { RepeatLight } from "../light";
import { RepeatRegular } from "../regular";
import { RepeatThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Repeat = memo(function Repeat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RepeatBold,
      duotone: RepeatDuotone,
      fill: RepeatFill,
      light: RepeatLight,
      regular: RepeatRegular,
      thin: RepeatThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
