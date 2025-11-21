import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandbagSimpleBoldIcon } from "../bold";
import { HandbagSimpleDuotoneIcon } from "../duotone";
import { HandbagSimpleFillIcon } from "../fill";
import { HandbagSimpleLightIcon } from "../light";
import { HandbagSimpleRegularIcon } from "../regular";
import { HandbagSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandbagSimpleIcon = memo(function HandbagSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandbagSimpleBoldIcon,
      duotone: HandbagSimpleDuotoneIcon,
      fill: HandbagSimpleFillIcon,
      light: HandbagSimpleLightIcon,
      regular: HandbagSimpleRegularIcon,
      thin: HandbagSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
