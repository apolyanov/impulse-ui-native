import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldBoldIcon } from "../bold/shield-bold.icon";
import { ShieldDuotoneIcon } from "../duotone/shield-duotone.icon";
import { ShieldFillIcon } from "../fill/shield-fill.icon";
import { ShieldLightIcon } from "../light/shield-light.icon";
import { ShieldRegularIcon } from "../regular/shield-regular.icon";
import { ShieldThinIcon } from "../thin/shield-thin.icon";

export const ShieldIcon = memo(function Shield(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldBoldIcon,
      duotone: ShieldDuotoneIcon,
      fill: ShieldFillIcon,
      light: ShieldLightIcon,
      regular: ShieldRegularIcon,
      thin: ShieldThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
