import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileLockBoldIcon } from "../bold/file-lock-bold.icon";
import { FileLockDuotoneIcon } from "../duotone/file-lock-duotone.icon";
import { FileLockFillIcon } from "../fill/file-lock-fill.icon";
import { FileLockLightIcon } from "../light/file-lock-light.icon";
import { FileLockRegularIcon } from "../regular/file-lock-regular.icon";
import { FileLockThinIcon } from "../thin/file-lock-thin.icon";

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
