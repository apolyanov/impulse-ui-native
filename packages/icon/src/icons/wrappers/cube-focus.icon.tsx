import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CubeFocusBoldIcon } from "../bold/cube-focus-bold.icon";
import { CubeFocusDuotoneIcon } from "../duotone/cube-focus-duotone.icon";
import { CubeFocusFillIcon } from "../fill/cube-focus-fill.icon";
import { CubeFocusLightIcon } from "../light/cube-focus-light.icon";
import { CubeFocusRegularIcon } from "../regular/cube-focus-regular.icon";
import { CubeFocusThinIcon } from "../thin/cube-focus-thin.icon";

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
