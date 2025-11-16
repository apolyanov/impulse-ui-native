import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShirtFoldedBold } from "../bold";
import { ShirtFoldedDuotone } from "../duotone";
import { ShirtFoldedFill } from "../fill";
import { ShirtFoldedLight } from "../light";
import { ShirtFoldedRegular } from "../regular";
import { ShirtFoldedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShirtFolded = memo(function ShirtFolded(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShirtFoldedBold,
      duotone: ShirtFoldedDuotone,
      fill: ShirtFoldedFill,
      light: ShirtFoldedLight,
      regular: ShirtFoldedRegular,
      thin: ShirtFoldedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
