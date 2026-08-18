import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderUserBoldIcon } from "../bold/folder-user-bold.icon";
import { FolderUserDuotoneIcon } from "../duotone/folder-user-duotone.icon";
import { FolderUserFillIcon } from "../fill/folder-user-fill.icon";
import { FolderUserLightIcon } from "../light/folder-user-light.icon";
import { FolderUserRegularIcon } from "../regular/folder-user-regular.icon";
import { FolderUserThinIcon } from "../thin/folder-user-thin.icon";

export const FolderUserIcon = memo(function FolderUser(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderUserBoldIcon,
      duotone: FolderUserDuotoneIcon,
      fill: FolderUserFillIcon,
      light: FolderUserLightIcon,
      regular: FolderUserRegularIcon,
      thin: FolderUserThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
