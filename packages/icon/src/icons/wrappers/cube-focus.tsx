import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CubeFocusBold } from "../bold";
import { CubeFocusDuotone } from "../duotone";
import { CubeFocusFill } from "../fill";
import { CubeFocusLight } from "../light";
import { CubeFocusRegular } from "../regular";
import { CubeFocusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CubeFocus = memo(function CubeFocus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CubeFocusBold,
      duotone: CubeFocusDuotone,
      fill: CubeFocusFill,
      light: CubeFocusLight,
      regular: CubeFocusRegular,
      thin: CubeFocusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
