import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderLockBold } from "../bold";
import { FolderLockDuotone } from "../duotone";
import { FolderLockFill } from "../fill";
import { FolderLockLight } from "../light";
import { FolderLockRegular } from "../regular";
import { FolderLockThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderLock = memo(function FolderLock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderLockBold,
      duotone: FolderLockDuotone,
      fill: FolderLockFill,
      light: FolderLockLight,
      regular: FolderLockRegular,
      thin: FolderLockThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
