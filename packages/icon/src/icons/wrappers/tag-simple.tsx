import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TagSimpleBold } from "../bold";
import { TagSimpleDuotone } from "../duotone";
import { TagSimpleFill } from "../fill";
import { TagSimpleLight } from "../light";
import { TagSimpleRegular } from "../regular";
import { TagSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TagSimple = memo(function TagSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TagSimpleBold,
      duotone: TagSimpleDuotone,
      fill: TagSimpleFill,
      light: TagSimpleLight,
      regular: TagSimpleRegular,
      thin: TagSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
