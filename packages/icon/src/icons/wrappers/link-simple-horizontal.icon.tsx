import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkSimpleHorizontalBoldIcon } from "../bold/link-simple-horizontal-bold.icon";
import { LinkSimpleHorizontalDuotoneIcon } from "../duotone/link-simple-horizontal-duotone.icon";
import { LinkSimpleHorizontalFillIcon } from "../fill/link-simple-horizontal-fill.icon";
import { LinkSimpleHorizontalLightIcon } from "../light/link-simple-horizontal-light.icon";
import { LinkSimpleHorizontalRegularIcon } from "../regular/link-simple-horizontal-regular.icon";
import { LinkSimpleHorizontalThinIcon } from "../thin/link-simple-horizontal-thin.icon";

export const LinkSimpleHorizontalIcon = memo(function LinkSimpleHorizontal(
  props: IconWrapperProps,
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
