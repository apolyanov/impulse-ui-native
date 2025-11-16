import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderUserBold } from "../bold";
import { FolderUserDuotone } from "../duotone";
import { FolderUserFill } from "../fill";
import { FolderUserLight } from "../light";
import { FolderUserRegular } from "../regular";
import { FolderUserThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderUser = memo(function FolderUser(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderUserBold,
      duotone: FolderUserDuotone,
      fill: FolderUserFill,
      light: FolderUserLight,
      regular: FolderUserRegular,
      thin: FolderUserThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
