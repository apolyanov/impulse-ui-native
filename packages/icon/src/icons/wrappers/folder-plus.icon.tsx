import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderPlusBoldIcon } from "../bold/folder-plus-bold.icon";
import { FolderPlusDuotoneIcon } from "../duotone/folder-plus-duotone.icon";
import { FolderPlusFillIcon } from "../fill/folder-plus-fill.icon";
import { FolderPlusLightIcon } from "../light/folder-plus-light.icon";
import { FolderPlusRegularIcon } from "../regular/folder-plus-regular.icon";
import { FolderPlusThinIcon } from "../thin/folder-plus-thin.icon";

export const FolderPlusIcon = memo(function FolderPlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderPlusBoldIcon,
      duotone: FolderPlusDuotoneIcon,
      fill: FolderPlusFillIcon,
      light: FolderPlusLightIcon,
      regular: FolderPlusRegularIcon,
      thin: FolderPlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
