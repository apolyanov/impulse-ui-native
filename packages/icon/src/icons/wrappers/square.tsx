import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SquareBold } from "../bold";
import { SquareDuotone } from "../duotone";
import { SquareFill } from "../fill";
import { SquareLight } from "../light";
import { SquareRegular } from "../regular";
import { SquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Square = memo(function Square(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SquareBold,
      duotone: SquareDuotone,
      fill: SquareFill,
      light: SquareLight,
      regular: SquareRegular,
      thin: SquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
