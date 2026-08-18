import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderSimplePlusBoldIcon } from "../bold/folder-simple-plus-bold.icon";
import { FolderSimplePlusDuotoneIcon } from "../duotone/folder-simple-plus-duotone.icon";
import { FolderSimplePlusFillIcon } from "../fill/folder-simple-plus-fill.icon";
import { FolderSimplePlusLightIcon } from "../light/folder-simple-plus-light.icon";
import { FolderSimplePlusRegularIcon } from "../regular/folder-simple-plus-regular.icon";
import { FolderSimplePlusThinIcon } from "../thin/folder-simple-plus-thin.icon";

export const FolderSimplePlusIcon = memo(function FolderSimplePlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimplePlusBoldIcon,
      duotone: FolderSimplePlusDuotoneIcon,
      fill: FolderSimplePlusFillIcon,
      light: FolderSimplePlusLightIcon,
      regular: FolderSimplePlusRegularIcon,
      thin: FolderSimplePlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
