import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TowelBold } from "../bold";
import { TowelDuotone } from "../duotone";
import { TowelFill } from "../fill";
import { TowelLight } from "../light";
import { TowelRegular } from "../regular";
import { TowelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Towel = memo(function Towel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TowelBold,
      duotone: TowelDuotone,
      fill: TowelFill,
      light: TowelLight,
      regular: TowelRegular,
      thin: TowelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
