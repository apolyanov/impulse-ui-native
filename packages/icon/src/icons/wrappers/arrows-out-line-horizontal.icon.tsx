import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsOutLineHorizontalBoldIcon } from "../bold/arrows-out-line-horizontal-bold.icon";
import { ArrowsOutLineHorizontalDuotoneIcon } from "../duotone/arrows-out-line-horizontal-duotone.icon";
import { ArrowsOutLineHorizontalFillIcon } from "../fill/arrows-out-line-horizontal-fill.icon";
import { ArrowsOutLineHorizontalLightIcon } from "../light/arrows-out-line-horizontal-light.icon";
import { ArrowsOutLineHorizontalRegularIcon } from "../regular/arrows-out-line-horizontal-regular.icon";
import { ArrowsOutLineHorizontalThinIcon } from "../thin/arrows-out-line-horizontal-thin.icon";

export const ArrowsOutLineHorizontalIcon = memo(
  function ArrowsOutLineHorizontal(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: ArrowsOutLineHorizontalBoldIcon,
        duotone: ArrowsOutLineHorizontalDuotoneIcon,
        fill: ArrowsOutLineHorizontalFillIcon,
        light: ArrowsOutLineHorizontalLightIcon,
        regular: ArrowsOutLineHorizontalRegularIcon,
        thin: ArrowsOutLineHorizontalThinIcon,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
