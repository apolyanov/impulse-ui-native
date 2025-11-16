import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SmileyBold } from "../bold";
import { SmileyDuotone } from "../duotone";
import { SmileyFill } from "../fill";
import { SmileyLight } from "../light";
import { SmileyRegular } from "../regular";
import { SmileyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Smiley = memo(function Smiley(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SmileyBold,
      duotone: SmileyDuotone,
      fill: SmileyFill,
      light: SmileyLight,
      regular: SmileyRegular,
      thin: SmileyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
