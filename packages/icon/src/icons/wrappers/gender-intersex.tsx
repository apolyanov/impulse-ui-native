import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GenderIntersexBold } from "../bold";
import { GenderIntersexDuotone } from "../duotone";
import { GenderIntersexFill } from "../fill";
import { GenderIntersexLight } from "../light";
import { GenderIntersexRegular } from "../regular";
import { GenderIntersexThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GenderIntersex = memo(function GenderIntersex(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GenderIntersexBold,
      duotone: GenderIntersexDuotone,
      fill: GenderIntersexFill,
      light: GenderIntersexLight,
      regular: GenderIntersexRegular,
      thin: GenderIntersexThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
