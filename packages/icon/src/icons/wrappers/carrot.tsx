import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CarrotBold } from "../bold";
import { CarrotDuotone } from "../duotone";
import { CarrotFill } from "../fill";
import { CarrotLight } from "../light";
import { CarrotRegular } from "../regular";
import { CarrotThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Carrot = memo(function Carrot(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CarrotBold,
      duotone: CarrotDuotone,
      fill: CarrotFill,
      light: CarrotLight,
      regular: CarrotRegular,
      thin: CarrotThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
