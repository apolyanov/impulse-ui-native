import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShippingContainerBoldIcon } from "../bold";
import { ShippingContainerDuotoneIcon } from "../duotone";
import { ShippingContainerFillIcon } from "../fill";
import { ShippingContainerLightIcon } from "../light";
import { ShippingContainerRegularIcon } from "../regular";
import { ShippingContainerThinIcon } from "../thin";

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
