import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkSimpleBoldIcon } from "../bold";
import { LinkSimpleDuotoneIcon } from "../duotone";
import { LinkSimpleFillIcon } from "../fill";
import { LinkSimpleLightIcon } from "../light";
import { LinkSimpleRegularIcon } from "../regular";
import { LinkSimpleThinIcon } from "../thin";

export const LinkSimpleIcon = memo(function LinkSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkSimpleBoldIcon,
      duotone: LinkSimpleDuotoneIcon,
      fill: LinkSimpleFillIcon,
      light: LinkSimpleLightIcon,
      regular: LinkSimpleRegularIcon,
      thin: LinkSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
