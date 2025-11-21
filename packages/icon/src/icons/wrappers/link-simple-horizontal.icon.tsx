import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LinkSimpleHorizontalBoldIcon } from "../bold";
import { LinkSimpleHorizontalDuotoneIcon } from "../duotone";
import { LinkSimpleHorizontalFillIcon } from "../fill";
import { LinkSimpleHorizontalLightIcon } from "../light";
import { LinkSimpleHorizontalRegularIcon } from "../regular";
import { LinkSimpleHorizontalThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LinkSimpleHorizontalIcon = memo(function LinkSimpleHorizontal(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkSimpleHorizontalBoldIcon,
      duotone: LinkSimpleHorizontalDuotoneIcon,
      fill: LinkSimpleHorizontalFillIcon,
      light: LinkSimpleHorizontalLightIcon,
      regular: LinkSimpleHorizontalRegularIcon,
      thin: LinkSimpleHorizontalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
