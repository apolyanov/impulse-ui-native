import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MouseSimpleBold } from "../bold";
import { MouseSimpleDuotone } from "../duotone";
import { MouseSimpleFill } from "../fill";
import { MouseSimpleLight } from "../light";
import { MouseSimpleRegular } from "../regular";
import { MouseSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const MouseSimple = memo(function MouseSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MouseSimpleBold,
      duotone: MouseSimpleDuotone,
      fill: MouseSimpleFill,
      light: MouseSimpleLight,
      regular: MouseSimpleRegular,
      thin: MouseSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
