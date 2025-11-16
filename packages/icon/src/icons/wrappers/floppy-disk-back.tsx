import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FloppyDiskBackBold } from "../bold";
import { FloppyDiskBackDuotone } from "../duotone";
import { FloppyDiskBackFill } from "../fill";
import { FloppyDiskBackLight } from "../light";
import { FloppyDiskBackRegular } from "../regular";
import { FloppyDiskBackThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FloppyDiskBack = memo(function FloppyDiskBack(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FloppyDiskBackBold,
      duotone: FloppyDiskBackDuotone,
      fill: FloppyDiskBackFill,
      light: FloppyDiskBackLight,
      regular: FloppyDiskBackRegular,
      thin: FloppyDiskBackThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
