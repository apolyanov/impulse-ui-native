import { createIcon } from "../../hocs/create-icon.hoc";
import { NotificationBoldIcon } from "../bold/notification-bold.icon";
import { NotificationDuotoneIcon } from "../duotone/notification-duotone.icon";
import { NotificationFillIcon } from "../fill/notification-fill.icon";
import { NotificationLightIcon } from "../light/notification-light.icon";
import { NotificationRegularIcon } from "../regular/notification-regular.icon";
import { NotificationThinIcon } from "../thin/notification-thin.icon";

export const NotificationIcon = createIcon("Notification", {
  bold: NotificationBoldIcon,
  duotone: NotificationDuotoneIcon,
  fill: NotificationFillIcon,
  light: NotificationLightIcon,
  regular: NotificationRegularIcon,
  thin: NotificationThinIcon,
});
