import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShippingContainerBoldIcon } from "../bold/shipping-container-bold.icon";
import { ShippingContainerDuotoneIcon } from "../duotone/shipping-container-duotone.icon";
import { ShippingContainerFillIcon } from "../fill/shipping-container-fill.icon";
import { ShippingContainerLightIcon } from "../light/shipping-container-light.icon";
import { ShippingContainerRegularIcon } from "../regular/shipping-container-regular.icon";
import { ShippingContainerThinIcon } from "../thin/shipping-container-thin.icon";

export const ShippingContainerIcon = memo(function ShippingContainer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShippingContainerBoldIcon,
      duotone: ShippingContainerDuotoneIcon,
      fill: ShippingContainerFillIcon,
      light: ShippingContainerLightIcon,
      regular: ShippingContainerRegularIcon,
      thin: ShippingContainerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
