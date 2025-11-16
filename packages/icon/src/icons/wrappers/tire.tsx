import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TireBold } from "../bold";
import { TireDuotone } from "../duotone";
import { TireFill } from "../fill";
import { TireLight } from "../light";
import { TireRegular } from "../regular";
import { TireThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tire = memo(function Tire(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TireBold,
      duotone: TireDuotone,
      fill: TireFill,
      light: TireLight,
      regular: TireRegular,
      thin: TireThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
