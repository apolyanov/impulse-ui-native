import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PerspectiveBold } from "../bold";
import { PerspectiveDuotone } from "../duotone";
import { PerspectiveFill } from "../fill";
import { PerspectiveLight } from "../light";
import { PerspectiveRegular } from "../regular";
import { PerspectiveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Perspective = memo(function Perspective(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PerspectiveBold,
      duotone: PerspectiveDuotone,
      fill: PerspectiveFill,
      light: PerspectiveLight,
      regular: PerspectiveRegular,
      thin: PerspectiveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
