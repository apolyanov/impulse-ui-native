import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SimCardBoldIcon } from "../bold";
import { SimCardDuotoneIcon } from "../duotone";
import { SimCardFillIcon } from "../fill";
import { SimCardLightIcon } from "../light";
import { SimCardRegularIcon } from "../regular";
import { SimCardThinIcon } from "../thin";

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
