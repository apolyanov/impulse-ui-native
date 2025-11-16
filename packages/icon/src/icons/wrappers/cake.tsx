import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CakeBold } from "../bold";
import { CakeDuotone } from "../duotone";
import { CakeFill } from "../fill";
import { CakeLight } from "../light";
import { CakeRegular } from "../regular";
import { CakeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cake = memo(function Cake(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CakeBold,
      duotone: CakeDuotone,
      fill: CakeFill,
      light: CakeLight,
      regular: CakeRegular,
      thin: CakeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
