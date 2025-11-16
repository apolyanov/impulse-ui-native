import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlameBold } from "../bold";
import { FlameDuotone } from "../duotone";
import { FlameFill } from "../fill";
import { FlameLight } from "../light";
import { FlameRegular } from "../regular";
import { FlameThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Flame = memo(function Flame(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlameBold,
      duotone: FlameDuotone,
      fill: FlameFill,
      light: FlameLight,
      regular: FlameRegular,
      thin: FlameThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
