import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BeerSteinBold } from "../bold";
import { BeerSteinDuotone } from "../duotone";
import { BeerSteinFill } from "../fill";
import { BeerSteinLight } from "../light";
import { BeerSteinRegular } from "../regular";
import { BeerSteinThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BeerStein = memo(function BeerStein(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeerSteinBold,
      duotone: BeerSteinDuotone,
      fill: BeerSteinFill,
      light: BeerSteinLight,
      regular: BeerSteinRegular,
      thin: BeerSteinThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
