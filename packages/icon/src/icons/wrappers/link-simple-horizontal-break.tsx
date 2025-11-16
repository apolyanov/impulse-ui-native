import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkSimpleHorizontalBreakBold } from "../bold";
import { LinkSimpleHorizontalBreakDuotone } from "../duotone";
import { LinkSimpleHorizontalBreakFill } from "../fill";
import { LinkSimpleHorizontalBreakLight } from "../light";
import { LinkSimpleHorizontalBreakRegular } from "../regular";
import { LinkSimpleHorizontalBreakThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkSimpleHorizontalBreak = memo(
  function LinkSimpleHorizontalBreak(props: IconWrapperProps) {
    const Icon = useMemo(() => {
      const icons: Record<IconVariant, ComponentType<SvgProps>> = {
        bold: LinkSimpleHorizontalBreakBold,
        duotone: LinkSimpleHorizontalBreakDuotone,
        fill: LinkSimpleHorizontalBreakFill,
        light: LinkSimpleHorizontalBreakLight,
        regular: LinkSimpleHorizontalBreakRegular,
        thin: LinkSimpleHorizontalBreakThin,
      };

      return icons[props.variant ?? "regular"];
    }, [props.variant]);

    return <Icon {...props} />;
  },
);
