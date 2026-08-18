import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SplitVerticalBoldIcon } from "../bold/split-vertical-bold.icon";
import { SplitVerticalDuotoneIcon } from "../duotone/split-vertical-duotone.icon";
import { SplitVerticalFillIcon } from "../fill/split-vertical-fill.icon";
import { SplitVerticalLightIcon } from "../light/split-vertical-light.icon";
import { SplitVerticalRegularIcon } from "../regular/split-vertical-regular.icon";
import { SplitVerticalThinIcon } from "../thin/split-vertical-thin.icon";

export const SplitVerticalIcon = memo(function SplitVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SplitVerticalBoldIcon,
      duotone: SplitVerticalDuotoneIcon,
      fill: SplitVerticalFillIcon,
      light: SplitVerticalLightIcon,
      regular: SplitVerticalRegularIcon,
      thin: SplitVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
