import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RepeatBoldIcon } from "../bold";
import { RepeatDuotoneIcon } from "../duotone";
import { RepeatFillIcon } from "../fill";
import { RepeatLightIcon } from "../light";
import { RepeatRegularIcon } from "../regular";
import { RepeatThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RepeatIcon = memo(function Repeat(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RepeatBoldIcon,
      duotone: RepeatDuotoneIcon,
      fill: RepeatFillIcon,
      light: RepeatLightIcon,
      regular: RepeatRegularIcon,
      thin: RepeatThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
