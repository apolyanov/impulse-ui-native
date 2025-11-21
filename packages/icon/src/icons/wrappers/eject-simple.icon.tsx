import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EjectSimpleBoldIcon } from "../bold";
import { EjectSimpleDuotoneIcon } from "../duotone";
import { EjectSimpleFillIcon } from "../fill";
import { EjectSimpleLightIcon } from "../light";
import { EjectSimpleRegularIcon } from "../regular";
import { EjectSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const EjectSimpleIcon = memo(function EjectSimple(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EjectSimpleBoldIcon,
      duotone: EjectSimpleDuotoneIcon,
      fill: EjectSimpleFillIcon,
      light: EjectSimpleLightIcon,
      regular: EjectSimpleRegularIcon,
      thin: EjectSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
