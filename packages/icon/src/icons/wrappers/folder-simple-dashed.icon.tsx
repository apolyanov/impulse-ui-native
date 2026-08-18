import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderSimpleDashedBoldIcon } from "../bold/folder-simple-dashed-bold.icon";
import { FolderSimpleDashedDuotoneIcon } from "../duotone/folder-simple-dashed-duotone.icon";
import { FolderSimpleDashedFillIcon } from "../fill/folder-simple-dashed-fill.icon";
import { FolderSimpleDashedLightIcon } from "../light/folder-simple-dashed-light.icon";
import { FolderSimpleDashedRegularIcon } from "../regular/folder-simple-dashed-regular.icon";
import { FolderSimpleDashedThinIcon } from "../thin/folder-simple-dashed-thin.icon";

export const FolderSimpleDashedIcon = memo(function FolderSimpleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleDashedBoldIcon,
      duotone: FolderSimpleDashedDuotoneIcon,
      fill: FolderSimpleDashedFillIcon,
      light: FolderSimpleDashedLightIcon,
      regular: FolderSimpleDashedRegularIcon,
      thin: FolderSimpleDashedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
