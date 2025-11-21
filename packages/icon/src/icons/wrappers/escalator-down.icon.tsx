import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EscalatorDownBoldIcon } from "../bold";
import { EscalatorDownDuotoneIcon } from "../duotone";
import { EscalatorDownFillIcon } from "../fill";
import { EscalatorDownLightIcon } from "../light";
import { EscalatorDownRegularIcon } from "../regular";
import { EscalatorDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EscalatorDownIcon = memo(function EscalatorDown(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EscalatorDownBoldIcon,
      duotone: EscalatorDownDuotoneIcon,
      fill: EscalatorDownFillIcon,
      light: EscalatorDownLightIcon,
      regular: EscalatorDownRegularIcon,
      thin: EscalatorDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
