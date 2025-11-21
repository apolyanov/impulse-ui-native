import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderIntersexBoldIcon } from "../bold";
import { GenderIntersexDuotoneIcon } from "../duotone";
import { GenderIntersexFillIcon } from "../fill";
import { GenderIntersexLightIcon } from "../light";
import { GenderIntersexRegularIcon } from "../regular";
import { GenderIntersexThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderIntersexIcon = memo(function GenderIntersex(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderIntersexBoldIcon,
      duotone: GenderIntersexDuotoneIcon,
      fill: GenderIntersexFillIcon,
      light: GenderIntersexLightIcon,
      regular: GenderIntersexRegularIcon,
      thin: GenderIntersexThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
