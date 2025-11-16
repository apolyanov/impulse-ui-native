import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberZeroBold } from "../bold";
import { NumberZeroDuotone } from "../duotone";
import { NumberZeroFill } from "../fill";
import { NumberZeroLight } from "../light";
import { NumberZeroRegular } from "../regular";
import { NumberZeroThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberZero = memo(function NumberZero(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberZeroBold,
      duotone: NumberZeroDuotone,
      fill: NumberZeroFill,
      light: NumberZeroLight,
      regular: NumberZeroRegular,
      thin: NumberZeroThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
