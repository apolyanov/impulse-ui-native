import { createIcon } from "../../hocs/create-icon.hoc";
import { RabbitBoldIcon } from "../bold/rabbit-bold.icon";
import { RabbitDuotoneIcon } from "../duotone/rabbit-duotone.icon";
import { RabbitFillIcon } from "../fill/rabbit-fill.icon";
import { RabbitLightIcon } from "../light/rabbit-light.icon";
import { RabbitRegularIcon } from "../regular/rabbit-regular.icon";
import { RabbitThinIcon } from "../thin/rabbit-thin.icon";

export const RabbitIcon = createIcon("Rabbit", {
  bold: RabbitBoldIcon,
  duotone: RabbitDuotoneIcon,
  fill: RabbitFillIcon,
  light: RabbitLightIcon,
  regular: RabbitRegularIcon,
  thin: RabbitThinIcon,
});
