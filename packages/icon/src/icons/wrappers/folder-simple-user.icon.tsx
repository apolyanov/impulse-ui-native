import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderSimpleUserBoldIcon } from "../bold/folder-simple-user-bold.icon";
import { FolderSimpleUserDuotoneIcon } from "../duotone/folder-simple-user-duotone.icon";
import { FolderSimpleUserFillIcon } from "../fill/folder-simple-user-fill.icon";
import { FolderSimpleUserLightIcon } from "../light/folder-simple-user-light.icon";
import { FolderSimpleUserRegularIcon } from "../regular/folder-simple-user-regular.icon";
import { FolderSimpleUserThinIcon } from "../thin/folder-simple-user-thin.icon";

export const FolderSimpleUserIcon = memo(function FolderSimpleUser(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleUserBoldIcon,
      duotone: FolderSimpleUserDuotoneIcon,
      fill: FolderSimpleUserFillIcon,
      light: FolderSimpleUserLightIcon,
      regular: FolderSimpleUserRegularIcon,
      thin: FolderSimpleUserThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
