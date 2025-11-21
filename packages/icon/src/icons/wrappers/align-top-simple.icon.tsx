import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignTopSimpleBoldIcon } from "../bold";
import { AlignTopSimpleDuotoneIcon } from "../duotone";
import { AlignTopSimpleFillIcon } from "../fill";
import { AlignTopSimpleLightIcon } from "../light";
import { AlignTopSimpleRegularIcon } from "../regular";
import { AlignTopSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignTopSimpleIcon = memo(function AlignTopSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignTopSimpleBoldIcon,
      duotone: AlignTopSimpleDuotoneIcon,
      fill: AlignTopSimpleFillIcon,
      light: AlignTopSimpleLightIcon,
      regular: AlignTopSimpleRegularIcon,
      thin: AlignTopSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
