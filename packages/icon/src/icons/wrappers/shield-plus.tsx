import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShieldPlusBold } from "../bold";
import { ShieldPlusDuotone } from "../duotone";
import { ShieldPlusFill } from "../fill";
import { ShieldPlusLight } from "../light";
import { ShieldPlusRegular } from "../regular";
import { ShieldPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShieldPlus = memo(function ShieldPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShieldPlusBold,
      duotone: ShieldPlusDuotone,
      fill: ShieldPlusFill,
      light: ShieldPlusLight,
      regular: ShieldPlusRegular,
      thin: ShieldPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
