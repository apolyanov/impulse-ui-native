import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ElevatorBoldIcon } from "../bold/elevator-bold.icon";
import { ElevatorDuotoneIcon } from "../duotone/elevator-duotone.icon";
import { ElevatorFillIcon } from "../fill/elevator-fill.icon";
import { ElevatorLightIcon } from "../light/elevator-light.icon";
import { ElevatorRegularIcon } from "../regular/elevator-regular.icon";
import { ElevatorThinIcon } from "../thin/elevator-thin.icon";

export const ElevatorIcon = memo(function Elevator(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ElevatorBoldIcon,
      duotone: ElevatorDuotoneIcon,
      fill: ElevatorFillIcon,
      light: ElevatorLightIcon,
      regular: ElevatorRegularIcon,
      thin: ElevatorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
