import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignBottomSimpleBoldIcon } from "../bold";
import { AlignBottomSimpleDuotoneIcon } from "../duotone";
import { AlignBottomSimpleFillIcon } from "../fill";
import { AlignBottomSimpleLightIcon } from "../light";
import { AlignBottomSimpleRegularIcon } from "../regular";
import { AlignBottomSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignBottomSimpleIcon = memo(function AlignBottomSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignBottomSimpleBoldIcon,
      duotone: AlignBottomSimpleDuotoneIcon,
      fill: AlignBottomSimpleFillIcon,
      light: AlignBottomSimpleLightIcon,
      regular: AlignBottomSimpleRegularIcon,
      thin: AlignBottomSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
