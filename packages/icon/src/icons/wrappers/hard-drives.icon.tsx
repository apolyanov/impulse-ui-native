import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HardDrivesBoldIcon } from "../bold/hard-drives-bold.icon";
import { HardDrivesDuotoneIcon } from "../duotone/hard-drives-duotone.icon";
import { HardDrivesFillIcon } from "../fill/hard-drives-fill.icon";
import { HardDrivesLightIcon } from "../light/hard-drives-light.icon";
import { HardDrivesRegularIcon } from "../regular/hard-drives-regular.icon";
import { HardDrivesThinIcon } from "../thin/hard-drives-thin.icon";

export const HardDrivesIcon = memo(function HardDrives(
  props: IconWrapperProps,
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
