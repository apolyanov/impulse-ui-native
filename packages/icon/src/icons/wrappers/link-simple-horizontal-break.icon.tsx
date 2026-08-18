import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkSimpleHorizontalBreakBoldIcon } from "../bold/link-simple-horizontal-break-bold.icon";
import { LinkSimpleHorizontalBreakDuotoneIcon } from "../duotone/link-simple-horizontal-break-duotone.icon";
import { LinkSimpleHorizontalBreakFillIcon } from "../fill/link-simple-horizontal-break-fill.icon";
import { LinkSimpleHorizontalBreakLightIcon } from "../light/link-simple-horizontal-break-light.icon";
import { LinkSimpleHorizontalBreakRegularIcon } from "../regular/link-simple-horizontal-break-regular.icon";
import { LinkSimpleHorizontalBreakThinIcon } from "../thin/link-simple-horizontal-break-thin.icon";

export const LinkSimpleHorizontalBreakIcon = memo(
  function LinkSimpleHorizontalBreak(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: LinkSimpleHorizontalBreakBoldIcon,
        duotone: LinkSimpleHorizontalBreakDuotoneIcon,
        fill: LinkSimpleHorizontalBreakFillIcon,
        light: LinkSimpleHorizontalBreakLightIcon,
        regular: LinkSimpleHorizontalBreakRegularIcon,
        thin: LinkSimpleHorizontalBreakThinIcon,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
