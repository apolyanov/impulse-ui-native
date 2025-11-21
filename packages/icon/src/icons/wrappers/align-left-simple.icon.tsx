import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlignLeftSimpleBoldIcon } from "../bold";
import { AlignLeftSimpleDuotoneIcon } from "../duotone";
import { AlignLeftSimpleFillIcon } from "../fill";
import { AlignLeftSimpleLightIcon } from "../light";
import { AlignLeftSimpleRegularIcon } from "../regular";
import { AlignLeftSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const AlignLeftSimpleIcon = memo(function AlignLeftSimple(
  props: IconWrapperProps
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
