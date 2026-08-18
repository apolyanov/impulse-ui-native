import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DoorOpenBoldIcon } from "../bold/door-open-bold.icon";
import { DoorOpenDuotoneIcon } from "../duotone/door-open-duotone.icon";
import { DoorOpenFillIcon } from "../fill/door-open-fill.icon";
import { DoorOpenLightIcon } from "../light/door-open-light.icon";
import { DoorOpenRegularIcon } from "../regular/door-open-regular.icon";
import { DoorOpenThinIcon } from "../thin/door-open-thin.icon";

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
