import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SubtractSquareBold } from "../bold";
import { SubtractSquareDuotone } from "../duotone";
import { SubtractSquareFill } from "../fill";
import { SubtractSquareLight } from "../light";
import { SubtractSquareRegular } from "../regular";
import { SubtractSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SubtractSquare = memo(function SubtractSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SubtractSquareBold,
      duotone: SubtractSquareDuotone,
      fill: SubtractSquareFill,
      light: SubtractSquareLight,
      regular: SubtractSquareRegular,
      thin: SubtractSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
