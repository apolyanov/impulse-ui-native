import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TagBoldIcon } from "../bold/tag-bold.icon";
import { TagDuotoneIcon } from "../duotone/tag-duotone.icon";
import { TagFillIcon } from "../fill/tag-fill.icon";
import { TagLightIcon } from "../light/tag-light.icon";
import { TagRegularIcon } from "../regular/tag-regular.icon";
import { TagThinIcon } from "../thin/tag-thin.icon";

export const TagIcon = memo(function Tag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TagBoldIcon,
      duotone: TagDuotoneIcon,
      fill: TagFillIcon,
      light: TagLightIcon,
      regular: TagRegularIcon,
      thin: TagThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
