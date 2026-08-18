import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CardsThreeBoldIcon } from "../bold/cards-three-bold.icon";
import { CardsThreeDuotoneIcon } from "../duotone/cards-three-duotone.icon";
import { CardsThreeFillIcon } from "../fill/cards-three-fill.icon";
import { CardsThreeLightIcon } from "../light/cards-three-light.icon";
import { CardsThreeRegularIcon } from "../regular/cards-three-regular.icon";
import { CardsThreeThinIcon } from "../thin/cards-three-thin.icon";

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
