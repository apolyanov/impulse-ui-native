import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LegoSmileyBold } from "../bold";
import { LegoSmileyDuotone } from "../duotone";
import { LegoSmileyFill } from "../fill";
import { LegoSmileyLight } from "../light";
import { LegoSmileyRegular } from "../regular";
import { LegoSmileyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LegoSmiley = memo(function LegoSmiley(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LegoSmileyBold,
      duotone: LegoSmileyDuotone,
      fill: LegoSmileyFill,
      light: LegoSmileyLight,
      regular: LegoSmileyRegular,
      thin: LegoSmileyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
