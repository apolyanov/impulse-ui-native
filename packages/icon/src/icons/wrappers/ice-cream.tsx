import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IceCreamBold } from "../bold";
import { IceCreamDuotone } from "../duotone";
import { IceCreamFill } from "../fill";
import { IceCreamLight } from "../light";
import { IceCreamRegular } from "../regular";
import { IceCreamThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const IceCream = memo(function IceCream(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: IceCreamBold,
      duotone: IceCreamDuotone,
      fill: IceCreamFill,
      light: IceCreamLight,
      regular: IceCreamRegular,
      thin: IceCreamThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
