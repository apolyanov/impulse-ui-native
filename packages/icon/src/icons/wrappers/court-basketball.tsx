import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CourtBasketballBold } from "../bold";
import { CourtBasketballDuotone } from "../duotone";
import { CourtBasketballFill } from "../fill";
import { CourtBasketballLight } from "../light";
import { CourtBasketballRegular } from "../regular";
import { CourtBasketballThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CourtBasketball = memo(function CourtBasketball(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CourtBasketballBold,
      duotone: CourtBasketballDuotone,
      fill: CourtBasketballFill,
      light: CourtBasketballLight,
      regular: CourtBasketballRegular,
      thin: CourtBasketballThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
