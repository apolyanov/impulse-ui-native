import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignTopSimpleBold } from "../bold";
import { AlignTopSimpleDuotone } from "../duotone";
import { AlignTopSimpleFill } from "../fill";
import { AlignTopSimpleLight } from "../light";
import { AlignTopSimpleRegular } from "../regular";
import { AlignTopSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignTopSimple = memo(function AlignTopSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignTopSimpleBold,
      duotone: AlignTopSimpleDuotone,
      fill: AlignTopSimpleFill,
      light: AlignTopSimpleLight,
      regular: AlignTopSimpleRegular,
      thin: AlignTopSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
