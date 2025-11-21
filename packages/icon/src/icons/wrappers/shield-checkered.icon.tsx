import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldCheckeredBoldIcon } from "../bold";
import { ShieldCheckeredDuotoneIcon } from "../duotone";
import { ShieldCheckeredFillIcon } from "../fill";
import { ShieldCheckeredLightIcon } from "../light";
import { ShieldCheckeredRegularIcon } from "../regular";
import { ShieldCheckeredThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldCheckeredIcon = memo(function ShieldCheckered(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldCheckeredBoldIcon,
      duotone: ShieldCheckeredDuotoneIcon,
      fill: ShieldCheckeredFillIcon,
      light: ShieldCheckeredLightIcon,
      regular: ShieldCheckeredRegularIcon,
      thin: ShieldCheckeredThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
