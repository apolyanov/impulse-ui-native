import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderUserBoldIcon } from "../bold";
import { FolderUserDuotoneIcon } from "../duotone";
import { FolderUserFillIcon } from "../fill";
import { FolderUserLightIcon } from "../light";
import { FolderUserRegularIcon } from "../regular";
import { FolderUserThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderUserIcon = memo(function FolderUser(
  props: IconWrapperProps
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
