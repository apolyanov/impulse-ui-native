import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NutBold } from "../bold";
import { NutDuotone } from "../duotone";
import { NutFill } from "../fill";
import { NutLight } from "../light";
import { NutRegular } from "../regular";
import { NutThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Nut = memo(function Nut(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NutBold,
      duotone: NutDuotone,
      fill: NutFill,
      light: NutLight,
      regular: NutRegular,
      thin: NutThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
