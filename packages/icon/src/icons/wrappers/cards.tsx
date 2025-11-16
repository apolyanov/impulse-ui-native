import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CardsBold } from "../bold";
import { CardsDuotone } from "../duotone";
import { CardsFill } from "../fill";
import { CardsLight } from "../light";
import { CardsRegular } from "../regular";
import { CardsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cards = memo(function Cards(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CardsBold,
      duotone: CardsDuotone,
      fill: CardsFill,
      light: CardsLight,
      regular: CardsRegular,
      thin: CardsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
