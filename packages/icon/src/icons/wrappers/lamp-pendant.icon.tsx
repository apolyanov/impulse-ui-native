import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LampPendantBoldIcon } from "../bold";
import { LampPendantDuotoneIcon } from "../duotone";
import { LampPendantFillIcon } from "../fill";
import { LampPendantLightIcon } from "../light";
import { LampPendantRegularIcon } from "../regular";
import { LampPendantThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LampPendantIcon = memo(function LampPendant(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LampPendantBoldIcon,
      duotone: LampPendantDuotoneIcon,
      fill: LampPendantFillIcon,
      light: LampPendantLightIcon,
      regular: LampPendantRegularIcon,
      thin: LampPendantThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
