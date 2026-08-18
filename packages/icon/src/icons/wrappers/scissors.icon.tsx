import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScissorsBoldIcon } from "../bold/scissors-bold.icon";
import { ScissorsDuotoneIcon } from "../duotone/scissors-duotone.icon";
import { ScissorsFillIcon } from "../fill/scissors-fill.icon";
import { ScissorsLightIcon } from "../light/scissors-light.icon";
import { ScissorsRegularIcon } from "../regular/scissors-regular.icon";
import { ScissorsThinIcon } from "../thin/scissors-thin.icon";

export const ScissorsIcon = memo(function Scissors(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScissorsBoldIcon,
      duotone: ScissorsDuotoneIcon,
      fill: ScissorsFillIcon,
      light: ScissorsLightIcon,
      regular: ScissorsRegularIcon,
      thin: ScissorsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
