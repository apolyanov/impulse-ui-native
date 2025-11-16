import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BeerBottleBold } from "../bold";
import { BeerBottleDuotone } from "../duotone";
import { BeerBottleFill } from "../fill";
import { BeerBottleLight } from "../light";
import { BeerBottleRegular } from "../regular";
import { BeerBottleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BeerBottle = memo(function BeerBottle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeerBottleBold,
      duotone: BeerBottleDuotone,
      fill: BeerBottleFill,
      light: BeerBottleLight,
      regular: BeerBottleRegular,
      thin: BeerBottleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
