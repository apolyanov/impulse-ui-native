import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderOpenBold } from "../bold";
import { FolderOpenDuotone } from "../duotone";
import { FolderOpenFill } from "../fill";
import { FolderOpenLight } from "../light";
import { FolderOpenRegular } from "../regular";
import { FolderOpenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderOpen = memo(function FolderOpen(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderOpenBold,
      duotone: FolderOpenDuotone,
      fill: FolderOpenFill,
      light: FolderOpenLight,
      regular: FolderOpenRegular,
      thin: FolderOpenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
