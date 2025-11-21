import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TagSimpleBoldIcon } from "../bold";
import { TagSimpleDuotoneIcon } from "../duotone";
import { TagSimpleFillIcon } from "../fill";
import { TagSimpleLightIcon } from "../light";
import { TagSimpleRegularIcon } from "../regular";
import { TagSimpleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TagSimpleIcon = memo(function TagSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TagSimpleBoldIcon,
      duotone: TagSimpleDuotoneIcon,
      fill: TagSimpleFillIcon,
      light: TagSimpleLightIcon,
      regular: TagSimpleRegularIcon,
      thin: TagSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
