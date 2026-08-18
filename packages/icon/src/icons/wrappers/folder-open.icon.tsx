import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderOpenBoldIcon } from "../bold/folder-open-bold.icon";
import { FolderOpenDuotoneIcon } from "../duotone/folder-open-duotone.icon";
import { FolderOpenFillIcon } from "../fill/folder-open-fill.icon";
import { FolderOpenLightIcon } from "../light/folder-open-light.icon";
import { FolderOpenRegularIcon } from "../regular/folder-open-regular.icon";
import { FolderOpenThinIcon } from "../thin/folder-open-thin.icon";

export const FolderOpenIcon = memo(function FolderOpen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderOpenBoldIcon,
      duotone: FolderOpenDuotoneIcon,
      fill: FolderOpenFillIcon,
      light: FolderOpenLightIcon,
      regular: FolderOpenRegularIcon,
      thin: FolderOpenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
