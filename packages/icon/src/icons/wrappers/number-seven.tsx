import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSevenBold } from "../bold";
import { NumberSevenDuotone } from "../duotone";
import { NumberSevenFill } from "../fill";
import { NumberSevenLight } from "../light";
import { NumberSevenRegular } from "../regular";
import { NumberSevenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSeven = memo(function NumberSeven(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSevenBold,
      duotone: NumberSevenDuotone,
      fill: NumberSevenFill,
      light: NumberSevenLight,
      regular: NumberSevenRegular,
      thin: NumberSevenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
