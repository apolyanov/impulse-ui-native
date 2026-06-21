import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AsteriskSimpleBoldIcon } from "../bold";
import { AsteriskSimpleDuotoneIcon } from "../duotone";
import { AsteriskSimpleFillIcon } from "../fill";
import { AsteriskSimpleLightIcon } from "../light";
import { AsteriskSimpleRegularIcon } from "../regular";
import { AsteriskSimpleThinIcon } from "../thin";

export const AsteriskSimpleIcon = memo(function AsteriskSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AsteriskSimpleBoldIcon,
      duotone: AsteriskSimpleDuotoneIcon,
      fill: AsteriskSimpleFillIcon,
      light: AsteriskSimpleLightIcon,
      regular: AsteriskSimpleRegularIcon,
      thin: AsteriskSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
