import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StorefrontBoldIcon } from "../bold/storefront-bold.icon";
import { StorefrontDuotoneIcon } from "../duotone/storefront-duotone.icon";
import { StorefrontFillIcon } from "../fill/storefront-fill.icon";
import { StorefrontLightIcon } from "../light/storefront-light.icon";
import { StorefrontRegularIcon } from "../regular/storefront-regular.icon";
import { StorefrontThinIcon } from "../thin/storefront-thin.icon";

export const StorefrontIcon = memo(function Storefront(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StorefrontBoldIcon,
      duotone: StorefrontDuotoneIcon,
      fill: StorefrontFillIcon,
      light: StorefrontLightIcon,
      regular: StorefrontRegularIcon,
      thin: StorefrontThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
