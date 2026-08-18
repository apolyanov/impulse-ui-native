import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderDashedBoldIcon } from "../bold/folder-dashed-bold.icon";
import { FolderDashedDuotoneIcon } from "../duotone/folder-dashed-duotone.icon";
import { FolderDashedFillIcon } from "../fill/folder-dashed-fill.icon";
import { FolderDashedLightIcon } from "../light/folder-dashed-light.icon";
import { FolderDashedRegularIcon } from "../regular/folder-dashed-regular.icon";
import { FolderDashedThinIcon } from "../thin/folder-dashed-thin.icon";

export const FolderDashedIcon = memo(function FolderDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderDashedBoldIcon,
      duotone: FolderDashedDuotoneIcon,
      fill: FolderDashedFillIcon,
      light: FolderDashedLightIcon,
      regular: FolderDashedRegularIcon,
      thin: FolderDashedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
