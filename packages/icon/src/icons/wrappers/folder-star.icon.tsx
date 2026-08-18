import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FolderStarBoldIcon } from "../bold/folder-star-bold.icon";
import { FolderStarDuotoneIcon } from "../duotone/folder-star-duotone.icon";
import { FolderStarFillIcon } from "../fill/folder-star-fill.icon";
import { FolderStarLightIcon } from "../light/folder-star-light.icon";
import { FolderStarRegularIcon } from "../regular/folder-star-regular.icon";
import { FolderStarThinIcon } from "../thin/folder-star-thin.icon";

export const FolderStarIcon = memo(function FolderStar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderStarBoldIcon,
      duotone: FolderStarDuotoneIcon,
      fill: FolderStarFillIcon,
      light: FolderStarLightIcon,
      regular: FolderStarRegularIcon,
      thin: FolderStarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
