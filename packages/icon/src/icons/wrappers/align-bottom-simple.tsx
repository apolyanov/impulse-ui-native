import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignBottomSimpleBold } from "../bold";
import { AlignBottomSimpleDuotone } from "../duotone";
import { AlignBottomSimpleFill } from "../fill";
import { AlignBottomSimpleLight } from "../light";
import { AlignBottomSimpleRegular } from "../regular";
import { AlignBottomSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignBottomSimple = memo(function AlignBottomSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignBottomSimpleBold,
      duotone: AlignBottomSimpleDuotone,
      fill: AlignBottomSimpleFill,
      light: AlignBottomSimpleLight,
      regular: AlignBottomSimpleRegular,
      thin: AlignBottomSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
