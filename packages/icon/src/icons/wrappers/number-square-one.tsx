import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareOneBold } from "../bold";
import { NumberSquareOneDuotone } from "../duotone";
import { NumberSquareOneFill } from "../fill";
import { NumberSquareOneLight } from "../light";
import { NumberSquareOneRegular } from "../regular";
import { NumberSquareOneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareOne = memo(function NumberSquareOne(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareOneBold,
      duotone: NumberSquareOneDuotone,
      fill: NumberSquareOneFill,
      light: NumberSquareOneLight,
      regular: NumberSquareOneRegular,
      thin: NumberSquareOneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
