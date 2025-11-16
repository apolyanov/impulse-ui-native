import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkSimpleBreakBold } from "../bold";
import { LinkSimpleBreakDuotone } from "../duotone";
import { LinkSimpleBreakFill } from "../fill";
import { LinkSimpleBreakLight } from "../light";
import { LinkSimpleBreakRegular } from "../regular";
import { LinkSimpleBreakThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkSimpleBreak = memo(function LinkSimpleBreak(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkSimpleBreakBold,
      duotone: LinkSimpleBreakDuotone,
      fill: LinkSimpleBreakFill,
      light: LinkSimpleBreakLight,
      regular: LinkSimpleBreakRegular,
      thin: LinkSimpleBreakThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
