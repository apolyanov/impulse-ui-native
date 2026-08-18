import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignBottomSimpleBoldIcon } from "../bold/align-bottom-simple-bold.icon";
import { AlignBottomSimpleDuotoneIcon } from "../duotone/align-bottom-simple-duotone.icon";
import { AlignBottomSimpleFillIcon } from "../fill/align-bottom-simple-fill.icon";
import { AlignBottomSimpleLightIcon } from "../light/align-bottom-simple-light.icon";
import { AlignBottomSimpleRegularIcon } from "../regular/align-bottom-simple-regular.icon";
import { AlignBottomSimpleThinIcon } from "../thin/align-bottom-simple-thin.icon";

export const AlignBottomSimpleIcon = memo(function AlignBottomSimple(
  props: IconWrapperProps,
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
