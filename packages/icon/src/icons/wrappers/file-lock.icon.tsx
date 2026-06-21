import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileLockBoldIcon } from "../bold";
import { FileLockDuotoneIcon } from "../duotone";
import { FileLockFillIcon } from "../fill";
import { FileLockLightIcon } from "../light";
import { FileLockRegularIcon } from "../regular";
import { FileLockThinIcon } from "../thin";

export const FileLockIcon = memo(function FileLock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileLockBoldIcon,
      duotone: FileLockDuotoneIcon,
      fill: FileLockFillIcon,
      light: FileLockLightIcon,
      regular: FileLockRegularIcon,
      thin: FileLockThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
