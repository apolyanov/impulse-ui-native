import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HardDriveBold } from "../bold";
import { HardDriveDuotone } from "../duotone";
import { HardDriveFill } from "../fill";
import { HardDriveLight } from "../light";
import { HardDriveRegular } from "../regular";
import { HardDriveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HardDrive = memo(function HardDrive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HardDriveBold,
      duotone: HardDriveDuotone,
      fill: HardDriveFill,
      light: HardDriveLight,
      regular: HardDriveRegular,
      thin: HardDriveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
