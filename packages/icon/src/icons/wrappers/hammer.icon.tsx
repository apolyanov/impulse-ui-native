import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HammerBoldIcon } from "../bold/hammer-bold.icon";
import { HammerDuotoneIcon } from "../duotone/hammer-duotone.icon";
import { HammerFillIcon } from "../fill/hammer-fill.icon";
import { HammerLightIcon } from "../light/hammer-light.icon";
import { HammerRegularIcon } from "../regular/hammer-regular.icon";
import { HammerThinIcon } from "../thin/hammer-thin.icon";

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
