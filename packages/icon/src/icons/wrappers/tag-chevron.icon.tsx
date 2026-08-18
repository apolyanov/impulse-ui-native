import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TagChevronBoldIcon } from "../bold/tag-chevron-bold.icon";
import { TagChevronDuotoneIcon } from "../duotone/tag-chevron-duotone.icon";
import { TagChevronFillIcon } from "../fill/tag-chevron-fill.icon";
import { TagChevronLightIcon } from "../light/tag-chevron-light.icon";
import { TagChevronRegularIcon } from "../regular/tag-chevron-regular.icon";
import { TagChevronThinIcon } from "../thin/tag-chevron-thin.icon";

export const TagChevronIcon = memo(function TagChevron(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TagChevronBoldIcon,
      duotone: TagChevronDuotoneIcon,
      fill: TagChevronFillIcon,
      light: TagChevronLightIcon,
      regular: TagChevronRegularIcon,
      thin: TagChevronThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
