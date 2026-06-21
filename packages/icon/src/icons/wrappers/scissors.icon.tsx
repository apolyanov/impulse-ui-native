import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ScissorsBoldIcon } from "../bold";
import { ScissorsDuotoneIcon } from "../duotone";
import { ScissorsFillIcon } from "../fill";
import { ScissorsLightIcon } from "../light";
import { ScissorsRegularIcon } from "../regular";
import { ScissorsThinIcon } from "../thin";

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
