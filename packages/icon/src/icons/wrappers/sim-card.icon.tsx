import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SimCardBoldIcon } from "../bold/sim-card-bold.icon";
import { SimCardDuotoneIcon } from "../duotone/sim-card-duotone.icon";
import { SimCardFillIcon } from "../fill/sim-card-fill.icon";
import { SimCardLightIcon } from "../light/sim-card-light.icon";
import { SimCardRegularIcon } from "../regular/sim-card-regular.icon";
import { SimCardThinIcon } from "../thin/sim-card-thin.icon";

export const SimCardIcon = memo(function SimCard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SimCardBoldIcon,
      duotone: SimCardDuotoneIcon,
      fill: SimCardFillIcon,
      light: SimCardLightIcon,
      regular: SimCardRegularIcon,
      thin: SimCardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
