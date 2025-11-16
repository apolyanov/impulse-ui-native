import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StarAndCrescentBold } from "../bold";
import { StarAndCrescentDuotone } from "../duotone";
import { StarAndCrescentFill } from "../fill";
import { StarAndCrescentLight } from "../light";
import { StarAndCrescentRegular } from "../regular";
import { StarAndCrescentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StarAndCrescent = memo(function StarAndCrescent(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarAndCrescentBold,
      duotone: StarAndCrescentDuotone,
      fill: StarAndCrescentFill,
      light: StarAndCrescentLight,
      regular: StarAndCrescentRegular,
      thin: StarAndCrescentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
