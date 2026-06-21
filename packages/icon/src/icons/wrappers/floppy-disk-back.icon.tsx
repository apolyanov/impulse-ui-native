import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FloppyDiskBackBoldIcon } from "../bold";
import { FloppyDiskBackDuotoneIcon } from "../duotone";
import { FloppyDiskBackFillIcon } from "../fill";
import { FloppyDiskBackLightIcon } from "../light";
import { FloppyDiskBackRegularIcon } from "../regular";
import { FloppyDiskBackThinIcon } from "../thin";

export const FloppyDiskBackIcon = memo(function FloppyDiskBack(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FloppyDiskBackBoldIcon,
      duotone: FloppyDiskBackDuotoneIcon,
      fill: FloppyDiskBackFillIcon,
      light: FloppyDiskBackLightIcon,
      regular: FloppyDiskBackRegularIcon,
      thin: FloppyDiskBackThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
