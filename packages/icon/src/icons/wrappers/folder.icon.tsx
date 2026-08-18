import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderBoldIcon } from "../bold/folder-bold.icon";
import { FolderDuotoneIcon } from "../duotone/folder-duotone.icon";
import { FolderFillIcon } from "../fill/folder-fill.icon";
import { FolderLightIcon } from "../light/folder-light.icon";
import { FolderRegularIcon } from "../regular/folder-regular.icon";
import { FolderThinIcon } from "../thin/folder-thin.icon";

export const FolderIcon = memo(function Folder(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderBoldIcon,
      duotone: FolderDuotoneIcon,
      fill: FolderFillIcon,
      light: FolderLightIcon,
      regular: FolderRegularIcon,
      thin: FolderThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
