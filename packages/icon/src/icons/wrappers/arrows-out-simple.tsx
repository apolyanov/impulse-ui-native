import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsOutSimpleBold } from "../bold";
import { ArrowsOutSimpleDuotone } from "../duotone";
import { ArrowsOutSimpleFill } from "../fill";
import { ArrowsOutSimpleLight } from "../light";
import { ArrowsOutSimpleRegular } from "../regular";
import { ArrowsOutSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsOutSimple = memo(function ArrowsOutSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsOutSimpleBold,
      duotone: ArrowsOutSimpleDuotone,
      fill: ArrowsOutSimpleFill,
      light: ArrowsOutSimpleLight,
      regular: ArrowsOutSimpleRegular,
      thin: ArrowsOutSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
