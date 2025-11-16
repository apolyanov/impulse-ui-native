import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimpleLockBold } from "../bold";
import { FolderSimpleLockDuotone } from "../duotone";
import { FolderSimpleLockFill } from "../fill";
import { FolderSimpleLockLight } from "../light";
import { FolderSimpleLockRegular } from "../regular";
import { FolderSimpleLockThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimpleLock = memo(function FolderSimpleLock(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleLockBold,
      duotone: FolderSimpleLockDuotone,
      fill: FolderSimpleLockFill,
      light: FolderSimpleLockLight,
      regular: FolderSimpleLockRegular,
      thin: FolderSimpleLockThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
