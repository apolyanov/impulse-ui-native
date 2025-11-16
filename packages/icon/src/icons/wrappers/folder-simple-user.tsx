import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimpleUserBold } from "../bold";
import { FolderSimpleUserDuotone } from "../duotone";
import { FolderSimpleUserFill } from "../fill";
import { FolderSimpleUserLight } from "../light";
import { FolderSimpleUserRegular } from "../regular";
import { FolderSimpleUserThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimpleUser = memo(function FolderSimpleUser(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleUserBold,
      duotone: FolderSimpleUserDuotone,
      fill: FolderSimpleUserFill,
      light: FolderSimpleUserLight,
      regular: FolderSimpleUserRegular,
      thin: FolderSimpleUserThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
