import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HardDriveBoldIcon } from "../bold";
import { HardDriveDuotoneIcon } from "../duotone";
import { HardDriveFillIcon } from "../fill";
import { HardDriveLightIcon } from "../light";
import { HardDriveRegularIcon } from "../regular";
import { HardDriveThinIcon } from "../thin";

export const HardDriveIcon = memo(function HardDrive(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HardDriveBoldIcon,
      duotone: HardDriveDuotoneIcon,
      fill: HardDriveFillIcon,
      light: HardDriveLightIcon,
      regular: HardDriveRegularIcon,
      thin: HardDriveThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
