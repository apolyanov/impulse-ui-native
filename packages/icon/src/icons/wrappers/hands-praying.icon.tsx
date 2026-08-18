import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandsPrayingBoldIcon } from "../bold/hands-praying-bold.icon";
import { HandsPrayingDuotoneIcon } from "../duotone/hands-praying-duotone.icon";
import { HandsPrayingFillIcon } from "../fill/hands-praying-fill.icon";
import { HandsPrayingLightIcon } from "../light/hands-praying-light.icon";
import { HandsPrayingRegularIcon } from "../regular/hands-praying-regular.icon";
import { HandsPrayingThinIcon } from "../thin/hands-praying-thin.icon";

export const HandsPrayingIcon = memo(function HandsPraying(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandsPrayingBoldIcon,
      duotone: HandsPrayingDuotoneIcon,
      fill: HandsPrayingFillIcon,
      light: HandsPrayingLightIcon,
      regular: HandsPrayingRegularIcon,
      thin: HandsPrayingThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
