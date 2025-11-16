import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsInSimpleBold } from "../bold";
import { ArrowsInSimpleDuotone } from "../duotone";
import { ArrowsInSimpleFill } from "../fill";
import { ArrowsInSimpleLight } from "../light";
import { ArrowsInSimpleRegular } from "../regular";
import { ArrowsInSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsInSimple = memo(function ArrowsInSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsInSimpleBold,
      duotone: ArrowsInSimpleDuotone,
      fill: ArrowsInSimpleFill,
      light: ArrowsInSimpleLight,
      regular: ArrowsInSimpleRegular,
      thin: ArrowsInSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
