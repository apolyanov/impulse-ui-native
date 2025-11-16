import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandsPrayingBold } from "../bold";
import { HandsPrayingDuotone } from "../duotone";
import { HandsPrayingFill } from "../fill";
import { HandsPrayingLight } from "../light";
import { HandsPrayingRegular } from "../regular";
import { HandsPrayingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandsPraying = memo(function HandsPraying(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandsPrayingBold,
      duotone: HandsPrayingDuotone,
      fill: HandsPrayingFill,
      light: HandsPrayingLight,
      regular: HandsPrayingRegular,
      thin: HandsPrayingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
