import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AngleBold } from "../bold";
import { AngleDuotone } from "../duotone";
import { AngleFill } from "../fill";
import { AngleLight } from "../light";
import { AngleRegular } from "../regular";
import { AngleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Angle = memo(function Angle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AngleBold,
      duotone: AngleDuotone,
      fill: AngleFill,
      light: AngleLight,
      regular: AngleRegular,
      thin: AngleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
