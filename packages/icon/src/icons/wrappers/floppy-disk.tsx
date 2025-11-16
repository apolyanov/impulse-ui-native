import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FloppyDiskBold } from "../bold";
import { FloppyDiskDuotone } from "../duotone";
import { FloppyDiskFill } from "../fill";
import { FloppyDiskLight } from "../light";
import { FloppyDiskRegular } from "../regular";
import { FloppyDiskThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FloppyDisk = memo(function FloppyDisk(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FloppyDiskBold,
      duotone: FloppyDiskDuotone,
      fill: FloppyDiskFill,
      light: FloppyDiskLight,
      regular: FloppyDiskRegular,
      thin: FloppyDiskThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
