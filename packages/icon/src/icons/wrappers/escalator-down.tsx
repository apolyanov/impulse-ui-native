import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EscalatorDownBold } from "../bold";
import { EscalatorDownDuotone } from "../duotone";
import { EscalatorDownFill } from "../fill";
import { EscalatorDownLight } from "../light";
import { EscalatorDownRegular } from "../regular";
import { EscalatorDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EscalatorDown = memo(function EscalatorDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EscalatorDownBold,
      duotone: EscalatorDownDuotone,
      fill: EscalatorDownFill,
      light: EscalatorDownLight,
      regular: EscalatorDownRegular,
      thin: EscalatorDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
