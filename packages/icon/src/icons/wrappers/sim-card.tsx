import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SimCardBold } from "../bold";
import { SimCardDuotone } from "../duotone";
import { SimCardFill } from "../fill";
import { SimCardLight } from "../light";
import { SimCardRegular } from "../regular";
import { SimCardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SimCard = memo(function SimCard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SimCardBold,
      duotone: SimCardDuotone,
      fill: SimCardFill,
      light: SimCardLight,
      regular: SimCardRegular,
      thin: SimCardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
