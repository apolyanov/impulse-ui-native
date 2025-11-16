import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderDashedBold } from "../bold";
import { FolderDashedDuotone } from "../duotone";
import { FolderDashedFill } from "../fill";
import { FolderDashedLight } from "../light";
import { FolderDashedRegular } from "../regular";
import { FolderDashedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderDashed = memo(function FolderDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderDashedBold,
      duotone: FolderDashedDuotone,
      fill: FolderDashedFill,
      light: FolderDashedLight,
      regular: FolderDashedRegular,
      thin: FolderDashedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
