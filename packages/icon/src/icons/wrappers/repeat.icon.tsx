import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RepeatBoldIcon } from "../bold/repeat-bold.icon";
import { RepeatDuotoneIcon } from "../duotone/repeat-duotone.icon";
import { RepeatFillIcon } from "../fill/repeat-fill.icon";
import { RepeatLightIcon } from "../light/repeat-light.icon";
import { RepeatRegularIcon } from "../regular/repeat-regular.icon";
import { RepeatThinIcon } from "../thin/repeat-thin.icon";

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
