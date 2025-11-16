import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FoldersBold } from "../bold";
import { FoldersDuotone } from "../duotone";
import { FoldersFill } from "../fill";
import { FoldersLight } from "../light";
import { FoldersRegular } from "../regular";
import { FoldersThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Folders = memo(function Folders(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FoldersBold,
      duotone: FoldersDuotone,
      fill: FoldersFill,
      light: FoldersLight,
      regular: FoldersRegular,
      thin: FoldersThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
