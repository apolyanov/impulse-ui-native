import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderMinusBold } from "../bold";
import { FolderMinusDuotone } from "../duotone";
import { FolderMinusFill } from "../fill";
import { FolderMinusLight } from "../light";
import { FolderMinusRegular } from "../regular";
import { FolderMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderMinus = memo(function FolderMinus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderMinusBold,
      duotone: FolderMinusDuotone,
      fill: FolderMinusFill,
      light: FolderMinusLight,
      regular: FolderMinusRegular,
      thin: FolderMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
