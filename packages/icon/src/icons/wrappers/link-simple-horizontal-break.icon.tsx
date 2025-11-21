import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkSimpleHorizontalBreakBoldIcon } from "../bold";
import { LinkSimpleHorizontalBreakDuotoneIcon } from "../duotone";
import { LinkSimpleHorizontalBreakFillIcon } from "../fill";
import { LinkSimpleHorizontalBreakLightIcon } from "../light";
import { LinkSimpleHorizontalBreakRegularIcon } from "../regular";
import { LinkSimpleHorizontalBreakThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
  }
);
