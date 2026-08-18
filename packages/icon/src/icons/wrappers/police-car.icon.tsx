import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PoliceCarBoldIcon } from "../bold/police-car-bold.icon";
import { PoliceCarDuotoneIcon } from "../duotone/police-car-duotone.icon";
import { PoliceCarFillIcon } from "../fill/police-car-fill.icon";
import { PoliceCarLightIcon } from "../light/police-car-light.icon";
import { PoliceCarRegularIcon } from "../regular/police-car-regular.icon";
import { PoliceCarThinIcon } from "../thin/police-car-thin.icon";

export const PoliceCarIcon = memo(function PoliceCar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PoliceCarBoldIcon,
      duotone: PoliceCarDuotoneIcon,
      fill: PoliceCarFillIcon,
      light: PoliceCarLightIcon,
      regular: PoliceCarRegularIcon,
      thin: PoliceCarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
