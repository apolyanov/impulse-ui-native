import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LinkSimpleBoldIcon } from "../bold/link-simple-bold.icon";
import { LinkSimpleDuotoneIcon } from "../duotone/link-simple-duotone.icon";
import { LinkSimpleFillIcon } from "../fill/link-simple-fill.icon";
import { LinkSimpleLightIcon } from "../light/link-simple-light.icon";
import { LinkSimpleRegularIcon } from "../regular/link-simple-regular.icon";
import { LinkSimpleThinIcon } from "../thin/link-simple-thin.icon";

export const LinkSimpleIcon = memo(function LinkSimple(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LinkSimpleBoldIcon,
      duotone: LinkSimpleDuotoneIcon,
      fill: LinkSimpleFillIcon,
      light: LinkSimpleLightIcon,
      regular: LinkSimpleRegularIcon,
      thin: LinkSimpleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
