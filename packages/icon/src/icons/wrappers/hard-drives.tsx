import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HardDrivesBold } from "../bold";
import { HardDrivesDuotone } from "../duotone";
import { HardDrivesFill } from "../fill";
import { HardDrivesLight } from "../light";
import { HardDrivesRegular } from "../regular";
import { HardDrivesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HardDrives = memo(function HardDrives(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HardDrivesBold,
      duotone: HardDrivesDuotone,
      fill: HardDrivesFill,
      light: HardDrivesLight,
      regular: HardDrivesRegular,
      thin: HardDrivesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
