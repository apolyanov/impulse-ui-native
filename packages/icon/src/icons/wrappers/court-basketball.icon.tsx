import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CourtBasketballBoldIcon } from "../bold";
import { CourtBasketballDuotoneIcon } from "../duotone";
import { CourtBasketballFillIcon } from "../fill";
import { CourtBasketballLightIcon } from "../light";
import { CourtBasketballRegularIcon } from "../regular";
import { CourtBasketballThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CourtBasketballIcon = memo(function CourtBasketball(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CourtBasketballBoldIcon,
      duotone: CourtBasketballDuotoneIcon,
      fill: CourtBasketballFillIcon,
      light: CourtBasketballLightIcon,
      regular: CourtBasketballRegularIcon,
      thin: CourtBasketballThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
