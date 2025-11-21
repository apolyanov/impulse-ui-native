import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderLockBoldIcon } from "../bold";
import { FolderLockDuotoneIcon } from "../duotone";
import { FolderLockFillIcon } from "../fill";
import { FolderLockLightIcon } from "../light";
import { FolderLockRegularIcon } from "../regular";
import { FolderLockThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderLockIcon = memo(function FolderLock(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderLockBoldIcon,
      duotone: FolderLockDuotoneIcon,
      fill: FolderLockFillIcon,
      light: FolderLockLightIcon,
      regular: FolderLockRegularIcon,
      thin: FolderLockThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
