import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlignLeftSimpleBoldIcon } from "../bold/align-left-simple-bold.icon";
import { AlignLeftSimpleDuotoneIcon } from "../duotone/align-left-simple-duotone.icon";
import { AlignLeftSimpleFillIcon } from "../fill/align-left-simple-fill.icon";
import { AlignLeftSimpleLightIcon } from "../light/align-left-simple-light.icon";
import { AlignLeftSimpleRegularIcon } from "../regular/align-left-simple-regular.icon";
import { AlignLeftSimpleThinIcon } from "../thin/align-left-simple-thin.icon";

export const AlignLeftSimpleIcon = memo(function AlignLeftSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlignLeftSimpleBoldIcon,
      duotone: AlignLeftSimpleDuotoneIcon,
      fill: AlignLeftSimpleFillIcon,
      light: AlignLeftSimpleLightIcon,
      regular: AlignLeftSimpleRegularIcon,
      thin: AlignLeftSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
