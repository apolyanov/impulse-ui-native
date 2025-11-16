import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CheeseBold } from "../bold";
import { CheeseDuotone } from "../duotone";
import { CheeseFill } from "../fill";
import { CheeseLight } from "../light";
import { CheeseRegular } from "../regular";
import { CheeseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cheese = memo(function Cheese(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CheeseBold,
      duotone: CheeseDuotone,
      fill: CheeseFill,
      light: CheeseLight,
      regular: CheeseRegular,
      thin: CheeseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
