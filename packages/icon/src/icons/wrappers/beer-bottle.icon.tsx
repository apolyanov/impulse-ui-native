import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BeerBottleBoldIcon } from "../bold";
import { BeerBottleDuotoneIcon } from "../duotone";
import { BeerBottleFillIcon } from "../fill";
import { BeerBottleLightIcon } from "../light";
import { BeerBottleRegularIcon } from "../regular";
import { BeerBottleThinIcon } from "../thin";

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
