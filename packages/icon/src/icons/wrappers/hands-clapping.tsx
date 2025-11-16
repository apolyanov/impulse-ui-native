import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandsClappingBold } from "../bold";
import { HandsClappingDuotone } from "../duotone";
import { HandsClappingFill } from "../fill";
import { HandsClappingLight } from "../light";
import { HandsClappingRegular } from "../regular";
import { HandsClappingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandsClapping = memo(function HandsClapping(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandsClappingBold,
      duotone: HandsClappingDuotone,
      fill: HandsClappingFill,
      light: HandsClappingLight,
      regular: HandsClappingRegular,
      thin: HandsClappingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
