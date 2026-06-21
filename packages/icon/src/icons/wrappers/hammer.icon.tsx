import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HammerBoldIcon } from "../bold";
import { HammerDuotoneIcon } from "../duotone";
import { HammerFillIcon } from "../fill";
import { HammerLightIcon } from "../light";
import { HammerRegularIcon } from "../regular";
import { HammerThinIcon } from "../thin";

export const HammerIcon = memo(function Hammer(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HammerBoldIcon,
      duotone: HammerDuotoneIcon,
      fill: HammerFillIcon,
      light: HammerLightIcon,
      regular: HammerRegularIcon,
      thin: HammerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
