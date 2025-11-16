import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IdentificationCardBold } from "../bold";
import { IdentificationCardDuotone } from "../duotone";
import { IdentificationCardFill } from "../fill";
import { IdentificationCardLight } from "../light";
import { IdentificationCardRegular } from "../regular";
import { IdentificationCardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IdentificationCard = memo(function IdentificationCard(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IdentificationCardBold,
      duotone: IdentificationCardDuotone,
      fill: IdentificationCardFill,
      light: IdentificationCardLight,
      regular: IdentificationCardRegular,
      thin: IdentificationCardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
