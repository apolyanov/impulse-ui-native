import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberFiveBold } from "../bold";
import { NumberFiveDuotone } from "../duotone";
import { NumberFiveFill } from "../fill";
import { NumberFiveLight } from "../light";
import { NumberFiveRegular } from "../regular";
import { NumberFiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberFive = memo(function NumberFive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberFiveBold,
      duotone: NumberFiveDuotone,
      fill: NumberFiveFill,
      light: NumberFiveLight,
      regular: NumberFiveRegular,
      thin: NumberFiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
