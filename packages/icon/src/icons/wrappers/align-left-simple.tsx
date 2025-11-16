import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignLeftSimpleBold } from "../bold";
import { AlignLeftSimpleDuotone } from "../duotone";
import { AlignLeftSimpleFill } from "../fill";
import { AlignLeftSimpleLight } from "../light";
import { AlignLeftSimpleRegular } from "../regular";
import { AlignLeftSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignLeftSimple = memo(function AlignLeftSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignLeftSimpleBold,
      duotone: AlignLeftSimpleDuotone,
      fill: AlignLeftSimpleFill,
      light: AlignLeftSimpleLight,
      regular: AlignLeftSimpleRegular,
      thin: AlignLeftSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
