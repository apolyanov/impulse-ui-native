import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderSimpleBoldIcon } from "../bold/folder-simple-bold.icon";
import { FolderSimpleDuotoneIcon } from "../duotone/folder-simple-duotone.icon";
import { FolderSimpleFillIcon } from "../fill/folder-simple-fill.icon";
import { FolderSimpleLightIcon } from "../light/folder-simple-light.icon";
import { FolderSimpleRegularIcon } from "../regular/folder-simple-regular.icon";
import { FolderSimpleThinIcon } from "../thin/folder-simple-thin.icon";

export const FolderSimpleIcon = memo(function FolderSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleBoldIcon,
      duotone: FolderSimpleDuotoneIcon,
      fill: FolderSimpleFillIcon,
      light: FolderSimpleLightIcon,
      regular: FolderSimpleRegularIcon,
      thin: FolderSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
