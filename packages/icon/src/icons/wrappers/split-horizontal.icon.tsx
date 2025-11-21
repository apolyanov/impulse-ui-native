import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SplitHorizontalBoldIcon } from "../bold";
import { SplitHorizontalDuotoneIcon } from "../duotone";
import { SplitHorizontalFillIcon } from "../fill";
import { SplitHorizontalLightIcon } from "../light";
import { SplitHorizontalRegularIcon } from "../regular";
import { SplitHorizontalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SplitHorizontalIcon = memo(function SplitHorizontal(
  props: IconWrapperProps
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
