import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderLockBoldIcon } from "../bold/folder-lock-bold.icon";
import { FolderLockDuotoneIcon } from "../duotone/folder-lock-duotone.icon";
import { FolderLockFillIcon } from "../fill/folder-lock-fill.icon";
import { FolderLockLightIcon } from "../light/folder-lock-light.icon";
import { FolderLockRegularIcon } from "../regular/folder-lock-regular.icon";
import { FolderLockThinIcon } from "../thin/folder-lock-thin.icon";

export const FolderLockIcon = memo(function FolderLock(
  props: IconWrapperProps,
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
