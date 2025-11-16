import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderStarBold } from "../bold";
import { FolderStarDuotone } from "../duotone";
import { FolderStarFill } from "../fill";
import { FolderStarLight } from "../light";
import { FolderStarRegular } from "../regular";
import { FolderStarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderStar = memo(function FolderStar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderStarBold,
      duotone: FolderStarDuotone,
      fill: FolderStarFill,
      light: FolderStarLight,
      regular: FolderStarRegular,
      thin: FolderStarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
