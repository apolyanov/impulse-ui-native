import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FoldersBoldIcon } from "../bold/folders-bold.icon";
import { FoldersDuotoneIcon } from "../duotone/folders-duotone.icon";
import { FoldersFillIcon } from "../fill/folders-fill.icon";
import { FoldersLightIcon } from "../light/folders-light.icon";
import { FoldersRegularIcon } from "../regular/folders-regular.icon";
import { FoldersThinIcon } from "../thin/folders-thin.icon";

export const FoldersIcon = memo(function Folders(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FoldersBoldIcon,
      duotone: FoldersDuotoneIcon,
      fill: FoldersFillIcon,
      light: FoldersLightIcon,
      regular: FoldersRegularIcon,
      thin: FoldersThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
