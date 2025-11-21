import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StorefrontBoldIcon } from "../bold";
import { StorefrontDuotoneIcon } from "../duotone";
import { StorefrontFillIcon } from "../fill";
import { StorefrontLightIcon } from "../light";
import { StorefrontRegularIcon } from "../regular";
import { StorefrontThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StorefrontIcon = memo(function Storefront(
  props: IconWrapperProps
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
