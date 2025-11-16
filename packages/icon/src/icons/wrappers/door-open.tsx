import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DoorOpenBold } from "../bold";
import { DoorOpenDuotone } from "../duotone";
import { DoorOpenFill } from "../fill";
import { DoorOpenLight } from "../light";
import { DoorOpenRegular } from "../regular";
import { DoorOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DoorOpen = memo(function DoorOpen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DoorOpenBold,
      duotone: DoorOpenDuotone,
      fill: DoorOpenFill,
      light: DoorOpenLight,
      regular: DoorOpenRegular,
      thin: DoorOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
