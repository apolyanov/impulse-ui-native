import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SplitHorizontalBoldIcon } from "../bold/split-horizontal-bold.icon";
import { SplitHorizontalDuotoneIcon } from "../duotone/split-horizontal-duotone.icon";
import { SplitHorizontalFillIcon } from "../fill/split-horizontal-fill.icon";
import { SplitHorizontalLightIcon } from "../light/split-horizontal-light.icon";
import { SplitHorizontalRegularIcon } from "../regular/split-horizontal-regular.icon";
import { SplitHorizontalThinIcon } from "../thin/split-horizontal-thin.icon";

export const SplitHorizontalIcon = memo(function SplitHorizontal(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SplitHorizontalBoldIcon,
      duotone: SplitHorizontalDuotoneIcon,
      fill: SplitHorizontalFillIcon,
      light: SplitHorizontalLightIcon,
      regular: SplitHorizontalRegularIcon,
      thin: SplitHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
