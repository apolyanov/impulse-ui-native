import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BeerBottleBoldIcon } from "../bold/beer-bottle-bold.icon";
import { BeerBottleDuotoneIcon } from "../duotone/beer-bottle-duotone.icon";
import { BeerBottleFillIcon } from "../fill/beer-bottle-fill.icon";
import { BeerBottleLightIcon } from "../light/beer-bottle-light.icon";
import { BeerBottleRegularIcon } from "../regular/beer-bottle-regular.icon";
import { BeerBottleThinIcon } from "../thin/beer-bottle-thin.icon";

export const BeerBottleIcon = memo(function BeerBottle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeerBottleBoldIcon,
      duotone: BeerBottleDuotoneIcon,
      fill: BeerBottleFillIcon,
      light: BeerBottleLightIcon,
      regular: BeerBottleRegularIcon,
      thin: BeerBottleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
