import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShieldCheckeredBoldIcon } from "../bold/shield-checkered-bold.icon";
import { ShieldCheckeredDuotoneIcon } from "../duotone/shield-checkered-duotone.icon";
import { ShieldCheckeredFillIcon } from "../fill/shield-checkered-fill.icon";
import { ShieldCheckeredLightIcon } from "../light/shield-checkered-light.icon";
import { ShieldCheckeredRegularIcon } from "../regular/shield-checkered-regular.icon";
import { ShieldCheckeredThinIcon } from "../thin/shield-checkered-thin.icon";

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
