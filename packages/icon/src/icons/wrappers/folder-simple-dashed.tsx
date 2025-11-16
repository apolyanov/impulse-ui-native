import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimpleDashedBold } from "../bold";
import { FolderSimpleDashedDuotone } from "../duotone";
import { FolderSimpleDashedFill } from "../fill";
import { FolderSimpleDashedLight } from "../light";
import { FolderSimpleDashedRegular } from "../regular";
import { FolderSimpleDashedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimpleDashed = memo(function FolderSimpleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleDashedBold,
      duotone: FolderSimpleDashedDuotone,
      fill: FolderSimpleDashedFill,
      light: FolderSimpleDashedLight,
      regular: FolderSimpleDashedRegular,
      thin: FolderSimpleDashedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
