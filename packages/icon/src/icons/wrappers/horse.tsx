import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HorseBold } from "../bold";
import { HorseDuotone } from "../duotone";
import { HorseFill } from "../fill";
import { HorseLight } from "../light";
import { HorseRegular } from "../regular";
import { HorseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Horse = memo(function Horse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HorseBold,
      duotone: HorseDuotone,
      fill: HorseFill,
      light: HorseLight,
      regular: HorseRegular,
      thin: HorseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
