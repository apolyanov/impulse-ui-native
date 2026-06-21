import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DoorOpenBoldIcon } from "../bold";
import { DoorOpenDuotoneIcon } from "../duotone";
import { DoorOpenFillIcon } from "../fill";
import { DoorOpenLightIcon } from "../light";
import { DoorOpenRegularIcon } from "../regular";
import { DoorOpenThinIcon } from "../thin";

export const DoorOpenIcon = memo(function DoorOpen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DoorOpenBoldIcon,
      duotone: DoorOpenDuotoneIcon,
      fill: DoorOpenFillIcon,
      light: DoorOpenLightIcon,
      regular: DoorOpenRegularIcon,
      thin: DoorOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
