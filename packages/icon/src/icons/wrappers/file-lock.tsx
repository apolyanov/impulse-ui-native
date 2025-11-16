import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileLockBold } from "../bold";
import { FileLockDuotone } from "../duotone";
import { FileLockFill } from "../fill";
import { FileLockLight } from "../light";
import { FileLockRegular } from "../regular";
import { FileLockThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileLock = memo(function FileLock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileLockBold,
      duotone: FileLockDuotone,
      fill: FileLockFill,
      light: FileLockLight,
      regular: FileLockRegular,
      thin: FileLockThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
