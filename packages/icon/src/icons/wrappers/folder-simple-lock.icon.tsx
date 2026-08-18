import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderSimpleLockBoldIcon } from "../bold/folder-simple-lock-bold.icon";
import { FolderSimpleLockDuotoneIcon } from "../duotone/folder-simple-lock-duotone.icon";
import { FolderSimpleLockFillIcon } from "../fill/folder-simple-lock-fill.icon";
import { FolderSimpleLockLightIcon } from "../light/folder-simple-lock-light.icon";
import { FolderSimpleLockRegularIcon } from "../regular/folder-simple-lock-regular.icon";
import { FolderSimpleLockThinIcon } from "../thin/folder-simple-lock-thin.icon";

export const FolderSimpleLockIcon = memo(function FolderSimpleLock(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleLockBoldIcon,
      duotone: FolderSimpleLockDuotoneIcon,
      fill: FolderSimpleLockFillIcon,
      light: FolderSimpleLockLightIcon,
      regular: FolderSimpleLockRegularIcon,
      thin: FolderSimpleLockThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
