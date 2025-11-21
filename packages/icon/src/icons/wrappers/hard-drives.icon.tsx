import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HardDrivesBoldIcon } from "../bold";
import { HardDrivesDuotoneIcon } from "../duotone";
import { HardDrivesFillIcon } from "../fill";
import { HardDrivesLightIcon } from "../light";
import { HardDrivesRegularIcon } from "../regular";
import { HardDrivesThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HardDrivesIcon = memo(function HardDrives(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HardDrivesBoldIcon,
      duotone: HardDrivesDuotoneIcon,
      fill: HardDrivesFillIcon,
      light: HardDrivesLightIcon,
      regular: HardDrivesRegularIcon,
      thin: HardDrivesThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
