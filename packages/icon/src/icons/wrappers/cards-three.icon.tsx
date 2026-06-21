import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CardsThreeBoldIcon } from "../bold";
import { CardsThreeDuotoneIcon } from "../duotone";
import { CardsThreeFillIcon } from "../fill";
import { CardsThreeLightIcon } from "../light";
import { CardsThreeRegularIcon } from "../regular";
import { CardsThreeThinIcon } from "../thin";

export const CardsThreeIcon = memo(function CardsThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CardsThreeBoldIcon,
      duotone: CardsThreeDuotoneIcon,
      fill: CardsThreeFillIcon,
      light: CardsThreeLightIcon,
      regular: CardsThreeRegularIcon,
      thin: CardsThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
