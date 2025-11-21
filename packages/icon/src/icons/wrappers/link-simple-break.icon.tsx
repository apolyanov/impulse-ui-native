import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkSimpleBreakBoldIcon } from "../bold";
import { LinkSimpleBreakDuotoneIcon } from "../duotone";
import { LinkSimpleBreakFillIcon } from "../fill";
import { LinkSimpleBreakLightIcon } from "../light";
import { LinkSimpleBreakRegularIcon } from "../regular";
import { LinkSimpleBreakThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkSimpleBreakIcon = memo(function LinkSimpleBreak(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkSimpleBreakBoldIcon,
      duotone: LinkSimpleBreakDuotoneIcon,
      fill: LinkSimpleBreakFillIcon,
      light: LinkSimpleBreakLightIcon,
      regular: LinkSimpleBreakRegularIcon,
      thin: LinkSimpleBreakThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
