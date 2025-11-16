import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareFourBold } from "../bold";
import { NumberSquareFourDuotone } from "../duotone";
import { NumberSquareFourFill } from "../fill";
import { NumberSquareFourLight } from "../light";
import { NumberSquareFourRegular } from "../regular";
import { NumberSquareFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareFour = memo(function NumberSquareFour(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareFourBold,
      duotone: NumberSquareFourDuotone,
      fill: NumberSquareFourFill,
      light: NumberSquareFourLight,
      regular: NumberSquareFourRegular,
      thin: NumberSquareFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
