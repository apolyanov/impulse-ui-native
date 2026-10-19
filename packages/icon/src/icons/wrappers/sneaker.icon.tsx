import { createIcon } from "../../hocs/create-icon.hoc";
import { SneakerBoldIcon } from "../bold/sneaker-bold.icon";
import { SneakerDuotoneIcon } from "../duotone/sneaker-duotone.icon";
import { SneakerFillIcon } from "../fill/sneaker-fill.icon";
import { SneakerLightIcon } from "../light/sneaker-light.icon";
import { SneakerRegularIcon } from "../regular/sneaker-regular.icon";
import { SneakerThinIcon } from "../thin/sneaker-thin.icon";

export const SneakerIcon = createIcon("Sneaker", {
  bold: SneakerBoldIcon,
  duotone: SneakerDuotoneIcon,
  fill: SneakerFillIcon,
  light: SneakerLightIcon,
  regular: SneakerRegularIcon,
  thin: SneakerThinIcon,
});
