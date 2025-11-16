import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FolderSimpleMinusBold } from "../bold";
import { FolderSimpleMinusDuotone } from "../duotone";
import { FolderSimpleMinusFill } from "../fill";
import { FolderSimpleMinusLight } from "../light";
import { FolderSimpleMinusRegular } from "../regular";
import { FolderSimpleMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FolderSimpleMinus = memo(function FolderSimpleMinus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FolderSimpleMinusBold,
      duotone: FolderSimpleMinusDuotone,
      fill: FolderSimpleMinusFill,
      light: FolderSimpleMinusLight,
      regular: FolderSimpleMinusRegular,
      thin: FolderSimpleMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
