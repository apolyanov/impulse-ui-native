import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CardsThreeBold } from "../bold";
import { CardsThreeDuotone } from "../duotone";
import { CardsThreeFill } from "../fill";
import { CardsThreeLight } from "../light";
import { CardsThreeRegular } from "../regular";
import { CardsThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CardsThree = memo(function CardsThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CardsThreeBold,
      duotone: CardsThreeDuotone,
      fill: CardsThreeFill,
      light: CardsThreeLight,
      regular: CardsThreeRegular,
      thin: CardsThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
