import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { IdentificationCardBoldIcon } from "../bold/identification-card-bold.icon";
import { IdentificationCardDuotoneIcon } from "../duotone/identification-card-duotone.icon";
import { IdentificationCardFillIcon } from "../fill/identification-card-fill.icon";
import { IdentificationCardLightIcon } from "../light/identification-card-light.icon";
import { IdentificationCardRegularIcon } from "../regular/identification-card-regular.icon";
import { IdentificationCardThinIcon } from "../thin/identification-card-thin.icon";

export const IdentificationCardIcon = memo(function IdentificationCard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IdentificationCardBoldIcon,
      duotone: IdentificationCardDuotoneIcon,
      fill: IdentificationCardFillIcon,
      light: IdentificationCardLightIcon,
      regular: IdentificationCardRegularIcon,
      thin: IdentificationCardThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
