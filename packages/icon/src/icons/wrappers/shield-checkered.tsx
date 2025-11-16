import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldCheckeredBold } from "../bold";
import { ShieldCheckeredDuotone } from "../duotone";
import { ShieldCheckeredFill } from "../fill";
import { ShieldCheckeredLight } from "../light";
import { ShieldCheckeredRegular } from "../regular";
import { ShieldCheckeredThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldCheckered = memo(function ShieldCheckered(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldCheckeredBold,
      duotone: ShieldCheckeredDuotone,
      fill: ShieldCheckeredFill,
      light: ShieldCheckeredLight,
      regular: ShieldCheckeredRegular,
      thin: ShieldCheckeredThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
