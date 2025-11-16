import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberTwoBold } from "../bold";
import { NumberTwoDuotone } from "../duotone";
import { NumberTwoFill } from "../fill";
import { NumberTwoLight } from "../light";
import { NumberTwoRegular } from "../regular";
import { NumberTwoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberTwo = memo(function NumberTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberTwoBold,
      duotone: NumberTwoDuotone,
      fill: NumberTwoFill,
      light: NumberTwoLight,
      regular: NumberTwoRegular,
      thin: NumberTwoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
