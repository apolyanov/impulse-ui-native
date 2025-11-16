import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PoliceCarBold } from "../bold";
import { PoliceCarDuotone } from "../duotone";
import { PoliceCarFill } from "../fill";
import { PoliceCarLight } from "../light";
import { PoliceCarRegular } from "../regular";
import { PoliceCarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PoliceCar = memo(function PoliceCar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PoliceCarBold,
      duotone: PoliceCarDuotone,
      fill: PoliceCarFill,
      light: PoliceCarLight,
      regular: PoliceCarRegular,
      thin: PoliceCarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
