import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldBold } from "../bold";
import { ShieldDuotone } from "../duotone";
import { ShieldFill } from "../fill";
import { ShieldLight } from "../light";
import { ShieldRegular } from "../regular";
import { ShieldThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Shield = memo(function Shield(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldBold,
      duotone: ShieldDuotone,
      fill: ShieldFill,
      light: ShieldLight,
      regular: ShieldRegular,
      thin: ShieldThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
