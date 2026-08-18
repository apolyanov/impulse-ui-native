import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CardsBoldIcon } from "../bold/cards-bold.icon";
import { CardsDuotoneIcon } from "../duotone/cards-duotone.icon";
import { CardsFillIcon } from "../fill/cards-fill.icon";
import { CardsLightIcon } from "../light/cards-light.icon";
import { CardsRegularIcon } from "../regular/cards-regular.icon";
import { CardsThinIcon } from "../thin/cards-thin.icon";

export const CardsIcon = memo(function Cards(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CardsBoldIcon,
      duotone: CardsDuotoneIcon,
      fill: CardsFillIcon,
      light: CardsLightIcon,
      regular: CardsRegularIcon,
      thin: CardsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
