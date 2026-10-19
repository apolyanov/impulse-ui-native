import { createIcon } from "../../hocs/create-icon.hoc";
import { ShippingContainerBoldIcon } from "../bold/shipping-container-bold.icon";
import { ShippingContainerDuotoneIcon } from "../duotone/shipping-container-duotone.icon";
import { ShippingContainerFillIcon } from "../fill/shipping-container-fill.icon";
import { ShippingContainerLightIcon } from "../light/shipping-container-light.icon";
import { ShippingContainerRegularIcon } from "../regular/shipping-container-regular.icon";
import { ShippingContainerThinIcon } from "../thin/shipping-container-thin.icon";

export const ShippingContainerIcon = createIcon("ShippingContainer", {
  bold: ShippingContainerBoldIcon,
  duotone: ShippingContainerDuotoneIcon,
  fill: ShippingContainerFillIcon,
  light: ShippingContainerLightIcon,
  regular: ShippingContainerRegularIcon,
  thin: ShippingContainerThinIcon,
});
