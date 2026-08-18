import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DoorBoldIcon } from "../bold/door-bold.icon";
import { DoorDuotoneIcon } from "../duotone/door-duotone.icon";
import { DoorFillIcon } from "../fill/door-fill.icon";
import { DoorLightIcon } from "../light/door-light.icon";
import { DoorRegularIcon } from "../regular/door-regular.icon";
import { DoorThinIcon } from "../thin/door-thin.icon";

export const DoorIcon = memo(function Door(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DoorBoldIcon,
      duotone: DoorDuotoneIcon,
      fill: DoorFillIcon,
      light: DoorLightIcon,
      regular: DoorRegularIcon,
      thin: DoorThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
