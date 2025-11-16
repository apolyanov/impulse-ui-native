import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CableCarBold } from "../bold";
import { CableCarDuotone } from "../duotone";
import { CableCarFill } from "../fill";
import { CableCarLight } from "../light";
import { CableCarRegular } from "../regular";
import { CableCarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CableCar = memo(function CableCar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CableCarBold,
      duotone: CableCarDuotone,
      fill: CableCarFill,
      light: CableCarLight,
      regular: CableCarRegular,
      thin: CableCarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
