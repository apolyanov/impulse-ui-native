import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderBoldIcon } from "../bold";
import { FolderDuotoneIcon } from "../duotone";
import { FolderFillIcon } from "../fill";
import { FolderLightIcon } from "../light";
import { FolderRegularIcon } from "../regular";
import { FolderThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
