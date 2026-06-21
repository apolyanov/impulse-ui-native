import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MegaphoneSimpleBoldIcon } from "../bold";
import { MegaphoneSimpleDuotoneIcon } from "../duotone";
import { MegaphoneSimpleFillIcon } from "../fill";
import { MegaphoneSimpleLightIcon } from "../light";
import { MegaphoneSimpleRegularIcon } from "../regular";
import { MegaphoneSimpleThinIcon } from "../thin";

export const MegaphoneSimpleIcon = memo(function MegaphoneSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MegaphoneSimpleBoldIcon,
      duotone: MegaphoneSimpleDuotoneIcon,
      fill: MegaphoneSimpleFillIcon,
      light: MegaphoneSimpleLightIcon,
      regular: MegaphoneSimpleRegularIcon,
      thin: MegaphoneSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
