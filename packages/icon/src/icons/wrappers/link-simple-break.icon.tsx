import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkSimpleBreakBoldIcon } from "../bold/link-simple-break-bold.icon";
import { LinkSimpleBreakDuotoneIcon } from "../duotone/link-simple-break-duotone.icon";
import { LinkSimpleBreakFillIcon } from "../fill/link-simple-break-fill.icon";
import { LinkSimpleBreakLightIcon } from "../light/link-simple-break-light.icon";
import { LinkSimpleBreakRegularIcon } from "../regular/link-simple-break-regular.icon";
import { LinkSimpleBreakThinIcon } from "../thin/link-simple-break-thin.icon";

export const LinkSimpleBreakIcon = memo(function LinkSimpleBreak(
  props: IconWrapperProps,
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
