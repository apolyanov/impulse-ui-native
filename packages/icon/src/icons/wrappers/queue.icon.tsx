import { createIcon } from "../../hocs/create-icon.hoc";
import { QueueBoldIcon } from "../bold/queue-bold.icon";
import { QueueDuotoneIcon } from "../duotone/queue-duotone.icon";
import { QueueFillIcon } from "../fill/queue-fill.icon";
import { QueueLightIcon } from "../light/queue-light.icon";
import { QueueRegularIcon } from "../regular/queue-regular.icon";
import { QueueThinIcon } from "../thin/queue-thin.icon";

export const QueueIcon = createIcon("Queue", {
  bold: QueueBoldIcon,
  duotone: QueueDuotoneIcon,
  fill: QueueFillIcon,
  light: QueueLightIcon,
  regular: QueueRegularIcon,
  thin: QueueThinIcon,
});
