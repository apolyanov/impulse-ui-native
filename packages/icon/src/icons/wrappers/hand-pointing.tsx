import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandPointingBold } from "../bold";
import { HandPointingDuotone } from "../duotone";
import { HandPointingFill } from "../fill";
import { HandPointingLight } from "../light";
import { HandPointingRegular } from "../regular";
import { HandPointingThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandPointing = memo(function HandPointing(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandPointingBold,
      duotone: HandPointingDuotone,
      fill: HandPointingFill,
      light: HandPointingLight,
      regular: HandPointingRegular,
      thin: HandPointingThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
