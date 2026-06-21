import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CubeFocusBoldIcon } from "../bold";
import { CubeFocusDuotoneIcon } from "../duotone";
import { CubeFocusFillIcon } from "../fill";
import { CubeFocusLightIcon } from "../light";
import { CubeFocusRegularIcon } from "../regular";
import { CubeFocusThinIcon } from "../thin";

export const CubeFocusIcon = memo(function CubeFocus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CubeFocusBoldIcon,
      duotone: CubeFocusDuotoneIcon,
      fill: CubeFocusFillIcon,
      light: CubeFocusLightIcon,
      regular: CubeFocusRegularIcon,
      thin: CubeFocusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
