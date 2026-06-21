import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BagSimpleBoldIcon } from "../bold";
import { BagSimpleDuotoneIcon } from "../duotone";
import { BagSimpleFillIcon } from "../fill";
import { BagSimpleLightIcon } from "../light";
import { BagSimpleRegularIcon } from "../regular";
import { BagSimpleThinIcon } from "../thin";

export const BagSimpleIcon = memo(function BagSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BagSimpleBoldIcon,
      duotone: BagSimpleDuotoneIcon,
      fill: BagSimpleFillIcon,
      light: BagSimpleLightIcon,
      regular: BagSimpleRegularIcon,
      thin: BagSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
