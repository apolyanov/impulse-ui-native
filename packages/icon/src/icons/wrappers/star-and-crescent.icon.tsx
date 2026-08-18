import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StarAndCrescentBoldIcon } from "../bold/star-and-crescent-bold.icon";
import { StarAndCrescentDuotoneIcon } from "../duotone/star-and-crescent-duotone.icon";
import { StarAndCrescentFillIcon } from "../fill/star-and-crescent-fill.icon";
import { StarAndCrescentLightIcon } from "../light/star-and-crescent-light.icon";
import { StarAndCrescentRegularIcon } from "../regular/star-and-crescent-regular.icon";
import { StarAndCrescentThinIcon } from "../thin/star-and-crescent-thin.icon";

export const StarAndCrescentIcon = memo(function StarAndCrescent(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarAndCrescentBoldIcon,
      duotone: StarAndCrescentDuotoneIcon,
      fill: StarAndCrescentFillIcon,
      light: StarAndCrescentLightIcon,
      regular: StarAndCrescentRegularIcon,
      thin: StarAndCrescentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
