import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandsClappingBoldIcon } from "../bold";
import { HandsClappingDuotoneIcon } from "../duotone";
import { HandsClappingFillIcon } from "../fill";
import { HandsClappingLightIcon } from "../light";
import { HandsClappingRegularIcon } from "../regular";
import { HandsClappingThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandsClappingIcon = memo(function HandsClapping(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandsClappingBoldIcon,
      duotone: HandsClappingDuotoneIcon,
      fill: HandsClappingFillIcon,
      light: HandsClappingLightIcon,
      regular: HandsClappingRegularIcon,
      thin: HandsClappingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
