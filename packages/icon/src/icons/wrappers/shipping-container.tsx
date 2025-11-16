import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShippingContainerBold } from "../bold";
import { ShippingContainerDuotone } from "../duotone";
import { ShippingContainerFill } from "../fill";
import { ShippingContainerLight } from "../light";
import { ShippingContainerRegular } from "../regular";
import { ShippingContainerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShippingContainer = memo(function ShippingContainer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShippingContainerBold,
      duotone: ShippingContainerDuotone,
      fill: ShippingContainerFill,
      light: ShippingContainerLight,
      regular: ShippingContainerRegular,
      thin: ShippingContainerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
