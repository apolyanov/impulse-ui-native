import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberEightBold } from "../bold";
import { NumberEightDuotone } from "../duotone";
import { NumberEightFill } from "../fill";
import { NumberEightLight } from "../light";
import { NumberEightRegular } from "../regular";
import { NumberEightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberEight = memo(function NumberEight(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberEightBold,
      duotone: NumberEightDuotone,
      fill: NumberEightFill,
      light: NumberEightLight,
      regular: NumberEightRegular,
      thin: NumberEightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
