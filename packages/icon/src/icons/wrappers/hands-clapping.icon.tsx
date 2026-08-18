import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandsClappingBoldIcon } from "../bold/hands-clapping-bold.icon";
import { HandsClappingDuotoneIcon } from "../duotone/hands-clapping-duotone.icon";
import { HandsClappingFillIcon } from "../fill/hands-clapping-fill.icon";
import { HandsClappingLightIcon } from "../light/hands-clapping-light.icon";
import { HandsClappingRegularIcon } from "../regular/hands-clapping-regular.icon";
import { HandsClappingThinIcon } from "../thin/hands-clapping-thin.icon";

export const HandsClappingIcon = memo(function HandsClapping(
  props: IconWrapperProps,
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
