import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TagSimpleBoldIcon } from "../bold/tag-simple-bold.icon";
import { TagSimpleDuotoneIcon } from "../duotone/tag-simple-duotone.icon";
import { TagSimpleFillIcon } from "../fill/tag-simple-fill.icon";
import { TagSimpleLightIcon } from "../light/tag-simple-light.icon";
import { TagSimpleRegularIcon } from "../regular/tag-simple-regular.icon";
import { TagSimpleThinIcon } from "../thin/tag-simple-thin.icon";

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
