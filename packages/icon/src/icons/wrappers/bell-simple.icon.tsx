import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BellSimpleBoldIcon } from "../bold";
import { BellSimpleDuotoneIcon } from "../duotone";
import { BellSimpleFillIcon } from "../fill";
import { BellSimpleLightIcon } from "../light";
import { BellSimpleRegularIcon } from "../regular";
import { BellSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BellSimpleIcon = memo(function BellSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BellSimpleBoldIcon,
      duotone: BellSimpleDuotoneIcon,
      fill: BellSimpleFillIcon,
      light: BellSimpleLightIcon,
      regular: BellSimpleRegularIcon,
      thin: BellSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
