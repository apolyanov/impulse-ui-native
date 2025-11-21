import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimpleLockBoldIcon } from "../bold";
import { FolderSimpleLockDuotoneIcon } from "../duotone";
import { FolderSimpleLockFillIcon } from "../fill";
import { FolderSimpleLockLightIcon } from "../light";
import { FolderSimpleLockRegularIcon } from "../regular";
import { FolderSimpleLockThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimpleLockIcon = memo(function FolderSimpleLock(
  props: IconWrapperProps
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
