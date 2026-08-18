import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ConfettiBoldIcon } from "../bold/confetti-bold.icon";
import { ConfettiDuotoneIcon } from "../duotone/confetti-duotone.icon";
import { ConfettiFillIcon } from "../fill/confetti-fill.icon";
import { ConfettiLightIcon } from "../light/confetti-light.icon";
import { ConfettiRegularIcon } from "../regular/confetti-regular.icon";
import { ConfettiThinIcon } from "../thin/confetti-thin.icon";

export const ConfettiIcon = memo(function Confetti(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ConfettiBoldIcon,
      duotone: ConfettiDuotoneIcon,
      fill: ConfettiFillIcon,
      light: ConfettiLightIcon,
      regular: ConfettiRegularIcon,
      thin: ConfettiThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
