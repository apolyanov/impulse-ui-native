import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TagChevronBoldIcon } from "../bold";
import { TagChevronDuotoneIcon } from "../duotone";
import { TagChevronFillIcon } from "../fill";
import { TagChevronLightIcon } from "../light";
import { TagChevronRegularIcon } from "../regular";
import { TagChevronThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TagChevronIcon = memo(function TagChevron(
  props: IconWrapperProps
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
