import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberSquareNineBold } from "../bold";
import { NumberSquareNineDuotone } from "../duotone";
import { NumberSquareNineFill } from "../fill";
import { NumberSquareNineLight } from "../light";
import { NumberSquareNineRegular } from "../regular";
import { NumberSquareNineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberSquareNine = memo(function NumberSquareNine(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberSquareNineBold,
      duotone: NumberSquareNineDuotone,
      fill: NumberSquareNineFill,
      light: NumberSquareNineLight,
      regular: NumberSquareNineRegular,
      thin: NumberSquareNineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
