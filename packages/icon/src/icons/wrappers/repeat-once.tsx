import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RepeatOnceBold } from "../bold";
import { RepeatOnceDuotone } from "../duotone";
import { RepeatOnceFill } from "../fill";
import { RepeatOnceLight } from "../light";
import { RepeatOnceRegular } from "../regular";
import { RepeatOnceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RepeatOnce = memo(function RepeatOnce(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RepeatOnceBold,
      duotone: RepeatOnceDuotone,
      fill: RepeatOnceFill,
      light: RepeatOnceLight,
      regular: RepeatOnceRegular,
      thin: RepeatOnceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
