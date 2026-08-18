import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FloppyDiskBoldIcon } from "../bold/floppy-disk-bold.icon";
import { FloppyDiskDuotoneIcon } from "../duotone/floppy-disk-duotone.icon";
import { FloppyDiskFillIcon } from "../fill/floppy-disk-fill.icon";
import { FloppyDiskLightIcon } from "../light/floppy-disk-light.icon";
import { FloppyDiskRegularIcon } from "../regular/floppy-disk-regular.icon";
import { FloppyDiskThinIcon } from "../thin/floppy-disk-thin.icon";

export const FloppyDiskIcon = memo(function FloppyDisk(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FloppyDiskBoldIcon,
      duotone: FloppyDiskDuotoneIcon,
      fill: FloppyDiskFillIcon,
      light: FloppyDiskLightIcon,
      regular: FloppyDiskRegularIcon,
      thin: FloppyDiskThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
