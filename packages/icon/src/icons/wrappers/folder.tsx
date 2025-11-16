import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderBold } from "../bold";
import { FolderDuotone } from "../duotone";
import { FolderFill } from "../fill";
import { FolderLight } from "../light";
import { FolderRegular } from "../regular";
import { FolderThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Folder = memo(function Folder(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderBold,
      duotone: FolderDuotone,
      fill: FolderFill,
      light: FolderLight,
      regular: FolderRegular,
      thin: FolderThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
