import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SplitVerticalBoldIcon } from "../bold";
import { SplitVerticalDuotoneIcon } from "../duotone";
import { SplitVerticalFillIcon } from "../fill";
import { SplitVerticalLightIcon } from "../light";
import { SplitVerticalRegularIcon } from "../regular";
import { SplitVerticalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const SplitVerticalIcon = memo(function SplitVertical(
  props: IconWrapperProps
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
