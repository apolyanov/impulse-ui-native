import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimplePlusBold } from "../bold";
import { FolderSimplePlusDuotone } from "../duotone";
import { FolderSimplePlusFill } from "../fill";
import { FolderSimplePlusLight } from "../light";
import { FolderSimplePlusRegular } from "../regular";
import { FolderSimplePlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimplePlus = memo(function FolderSimplePlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimplePlusBold,
      duotone: FolderSimplePlusDuotone,
      fill: FolderSimplePlusFill,
      light: FolderSimplePlusLight,
      regular: FolderSimplePlusRegular,
      thin: FolderSimplePlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
