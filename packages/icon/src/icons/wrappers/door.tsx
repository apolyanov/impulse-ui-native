import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DoorBold } from "../bold";
import { DoorDuotone } from "../duotone";
import { DoorFill } from "../fill";
import { DoorLight } from "../light";
import { DoorRegular } from "../regular";
import { DoorThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Door = memo(function Door(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DoorBold,
      duotone: DoorDuotone,
      fill: DoorFill,
      light: DoorLight,
      regular: DoorRegular,
      thin: DoorThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
