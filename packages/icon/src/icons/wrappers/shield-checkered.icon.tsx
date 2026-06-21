import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldCheckeredBoldIcon } from "../bold";
import { ShieldCheckeredDuotoneIcon } from "../duotone";
import { ShieldCheckeredFillIcon } from "../fill";
import { ShieldCheckeredLightIcon } from "../light";
import { ShieldCheckeredRegularIcon } from "../regular";
import { ShieldCheckeredThinIcon } from "../thin";

export const ShieldCheckeredIcon = memo(function ShieldCheckered(
  props: IconWrapperProps,
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
