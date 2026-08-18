import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkBreakBoldIcon } from "../bold/link-break-bold.icon";
import { LinkBreakDuotoneIcon } from "../duotone/link-break-duotone.icon";
import { LinkBreakFillIcon } from "../fill/link-break-fill.icon";
import { LinkBreakLightIcon } from "../light/link-break-light.icon";
import { LinkBreakRegularIcon } from "../regular/link-break-regular.icon";
import { LinkBreakThinIcon } from "../thin/link-break-thin.icon";

export const LinkBreakIcon = memo(function LinkBreak(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkBreakBoldIcon,
      duotone: LinkBreakDuotoneIcon,
      fill: LinkBreakFillIcon,
      light: LinkBreakLightIcon,
      regular: LinkBreakRegularIcon,
      thin: LinkBreakThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
