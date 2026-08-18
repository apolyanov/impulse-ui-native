import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HardDriveBoldIcon } from "../bold/hard-drive-bold.icon";
import { HardDriveDuotoneIcon } from "../duotone/hard-drive-duotone.icon";
import { HardDriveFillIcon } from "../fill/hard-drive-fill.icon";
import { HardDriveLightIcon } from "../light/hard-drive-light.icon";
import { HardDriveRegularIcon } from "../regular/hard-drive-regular.icon";
import { HardDriveThinIcon } from "../thin/hard-drive-thin.icon";

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
