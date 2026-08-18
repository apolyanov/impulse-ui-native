import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsSplitBoldIcon } from "../bold/arrows-split-bold.icon";
import { ArrowsSplitDuotoneIcon } from "../duotone/arrows-split-duotone.icon";
import { ArrowsSplitFillIcon } from "../fill/arrows-split-fill.icon";
import { ArrowsSplitLightIcon } from "../light/arrows-split-light.icon";
import { ArrowsSplitRegularIcon } from "../regular/arrows-split-regular.icon";
import { ArrowsSplitThinIcon } from "../thin/arrows-split-thin.icon";

export const ArrowsSplitIcon = memo(function ArrowsSplit(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsSplitBoldIcon,
      duotone: ArrowsSplitDuotoneIcon,
      fill: ArrowsSplitFillIcon,
      light: ArrowsSplitLightIcon,
      regular: ArrowsSplitRegularIcon,
      thin: ArrowsSplitThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
