import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GenderIntersexBoldIcon } from "../bold/gender-intersex-bold.icon";
import { GenderIntersexDuotoneIcon } from "../duotone/gender-intersex-duotone.icon";
import { GenderIntersexFillIcon } from "../fill/gender-intersex-fill.icon";
import { GenderIntersexLightIcon } from "../light/gender-intersex-light.icon";
import { GenderIntersexRegularIcon } from "../regular/gender-intersex-regular.icon";
import { GenderIntersexThinIcon } from "../thin/gender-intersex-thin.icon";

export const GenderIntersexIcon = memo(function GenderIntersex(
  props: IconWrapperProps,
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
