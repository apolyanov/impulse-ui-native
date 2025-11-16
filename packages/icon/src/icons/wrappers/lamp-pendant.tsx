import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LampPendantBold } from "../bold";
import { LampPendantDuotone } from "../duotone";
import { LampPendantFill } from "../fill";
import { LampPendantLight } from "../light";
import { LampPendantRegular } from "../regular";
import { LampPendantThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LampPendant = memo(function LampPendant(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LampPendantBold,
      duotone: LampPendantDuotone,
      fill: LampPendantFill,
      light: LampPendantLight,
      regular: LampPendantRegular,
      thin: LampPendantThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
