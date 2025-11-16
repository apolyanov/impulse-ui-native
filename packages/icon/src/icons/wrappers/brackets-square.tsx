import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BracketsSquareBold } from "../bold";
import { BracketsSquareDuotone } from "../duotone";
import { BracketsSquareFill } from "../fill";
import { BracketsSquareLight } from "../light";
import { BracketsSquareRegular } from "../regular";
import { BracketsSquareThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BracketsSquare = memo(function BracketsSquare(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BracketsSquareBold,
      duotone: BracketsSquareDuotone,
      fill: BracketsSquareFill,
      light: BracketsSquareLight,
      regular: BracketsSquareRegular,
      thin: BracketsSquareThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
