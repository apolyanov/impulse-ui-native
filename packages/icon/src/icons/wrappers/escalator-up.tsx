import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EscalatorUpBold } from "../bold";
import { EscalatorUpDuotone } from "../duotone";
import { EscalatorUpFill } from "../fill";
import { EscalatorUpLight } from "../light";
import { EscalatorUpRegular } from "../regular";
import { EscalatorUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EscalatorUp = memo(function EscalatorUp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EscalatorUpBold,
      duotone: EscalatorUpDuotone,
      fill: EscalatorUpFill,
      light: EscalatorUpLight,
      regular: EscalatorUpRegular,
      thin: EscalatorUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
