import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HammerBold } from "../bold";
import { HammerDuotone } from "../duotone";
import { HammerFill } from "../fill";
import { HammerLight } from "../light";
import { HammerRegular } from "../regular";
import { HammerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hammer = memo(function Hammer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HammerBold,
      duotone: HammerDuotone,
      fill: HammerFill,
      light: HammerLight,
      regular: HammerRegular,
      thin: HammerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
