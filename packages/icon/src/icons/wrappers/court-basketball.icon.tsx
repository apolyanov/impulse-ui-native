import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CourtBasketballBoldIcon } from "../bold/court-basketball-bold.icon";
import { CourtBasketballDuotoneIcon } from "../duotone/court-basketball-duotone.icon";
import { CourtBasketballFillIcon } from "../fill/court-basketball-fill.icon";
import { CourtBasketballLightIcon } from "../light/court-basketball-light.icon";
import { CourtBasketballRegularIcon } from "../regular/court-basketball-regular.icon";
import { CourtBasketballThinIcon } from "../thin/court-basketball-thin.icon";

export const CourtBasketballIcon = memo(function CourtBasketball(
  props: IconWrapperProps,
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
