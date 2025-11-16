import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ConfettiBold } from "../bold";
import { ConfettiDuotone } from "../duotone";
import { ConfettiFill } from "../fill";
import { ConfettiLight } from "../light";
import { ConfettiRegular } from "../regular";
import { ConfettiThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Confetti = memo(function Confetti(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ConfettiBold,
      duotone: ConfettiDuotone,
      fill: ConfettiFill,
      light: ConfettiLight,
      regular: ConfettiRegular,
      thin: ConfettiThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
