import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DropSimpleBoldIcon } from "../bold";
import { DropSimpleDuotoneIcon } from "../duotone";
import { DropSimpleFillIcon } from "../fill";
import { DropSimpleLightIcon } from "../light";
import { DropSimpleRegularIcon } from "../regular";
import { DropSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DropSimpleIcon = memo(function DropSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DropSimpleBoldIcon,
      duotone: DropSimpleDuotoneIcon,
      fill: DropSimpleFillIcon,
      light: DropSimpleLightIcon,
      regular: DropSimpleRegularIcon,
      thin: DropSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
