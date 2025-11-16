import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ScissorsBold } from "../bold";
import { ScissorsDuotone } from "../duotone";
import { ScissorsFill } from "../fill";
import { ScissorsLight } from "../light";
import { ScissorsRegular } from "../regular";
import { ScissorsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Scissors = memo(function Scissors(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ScissorsBold,
      duotone: ScissorsDuotone,
      fill: ScissorsFill,
      light: ScissorsLight,
      regular: ScissorsRegular,
      thin: ScissorsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
