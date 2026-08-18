import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignTopSimpleBoldIcon } from "../bold/align-top-simple-bold.icon";
import { AlignTopSimpleDuotoneIcon } from "../duotone/align-top-simple-duotone.icon";
import { AlignTopSimpleFillIcon } from "../fill/align-top-simple-fill.icon";
import { AlignTopSimpleLightIcon } from "../light/align-top-simple-light.icon";
import { AlignTopSimpleRegularIcon } from "../regular/align-top-simple-regular.icon";
import { AlignTopSimpleThinIcon } from "../thin/align-top-simple-thin.icon";

export const AlignTopSimpleIcon = memo(function AlignTopSimple(
  props: IconWrapperProps,
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
