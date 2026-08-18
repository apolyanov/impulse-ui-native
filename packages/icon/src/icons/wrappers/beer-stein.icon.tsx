import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BeerSteinBoldIcon } from "../bold/beer-stein-bold.icon";
import { BeerSteinDuotoneIcon } from "../duotone/beer-stein-duotone.icon";
import { BeerSteinFillIcon } from "../fill/beer-stein-fill.icon";
import { BeerSteinLightIcon } from "../light/beer-stein-light.icon";
import { BeerSteinRegularIcon } from "../regular/beer-stein-regular.icon";
import { BeerSteinThinIcon } from "../thin/beer-stein-thin.icon";

export const BeerSteinIcon = memo(function BeerStein(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeerSteinBoldIcon,
      duotone: BeerSteinDuotoneIcon,
      fill: BeerSteinFillIcon,
      light: BeerSteinLightIcon,
      regular: BeerSteinRegularIcon,
      thin: BeerSteinThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
