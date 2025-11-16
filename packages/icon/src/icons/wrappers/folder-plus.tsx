import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderPlusBold } from "../bold";
import { FolderPlusDuotone } from "../duotone";
import { FolderPlusFill } from "../fill";
import { FolderPlusLight } from "../light";
import { FolderPlusRegular } from "../regular";
import { FolderPlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderPlus = memo(function FolderPlus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderPlusBold,
      duotone: FolderPlusDuotone,
      fill: FolderPlusFill,
      light: FolderPlusLight,
      regular: FolderPlusRegular,
      thin: FolderPlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
