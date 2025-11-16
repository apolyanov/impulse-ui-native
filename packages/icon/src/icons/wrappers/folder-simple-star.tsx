import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimpleStarBold } from "../bold";
import { FolderSimpleStarDuotone } from "../duotone";
import { FolderSimpleStarFill } from "../fill";
import { FolderSimpleStarLight } from "../light";
import { FolderSimpleStarRegular } from "../regular";
import { FolderSimpleStarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimpleStar = memo(function FolderSimpleStar(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleStarBold,
      duotone: FolderSimpleStarDuotone,
      fill: FolderSimpleStarFill,
      light: FolderSimpleStarLight,
      regular: FolderSimpleStarRegular,
      thin: FolderSimpleStarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
