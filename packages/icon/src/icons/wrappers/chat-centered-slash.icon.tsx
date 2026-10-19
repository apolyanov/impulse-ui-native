import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatCenteredSlashBoldIcon } from "../bold/chat-centered-slash-bold.icon";
import { ChatCenteredSlashDuotoneIcon } from "../duotone/chat-centered-slash-duotone.icon";
import { ChatCenteredSlashFillIcon } from "../fill/chat-centered-slash-fill.icon";
import { ChatCenteredSlashLightIcon } from "../light/chat-centered-slash-light.icon";
import { ChatCenteredSlashRegularIcon } from "../regular/chat-centered-slash-regular.icon";
import { ChatCenteredSlashThinIcon } from "../thin/chat-centered-slash-thin.icon";

export const ChatCenteredSlashIcon = createIcon("ChatCenteredSlash", {
  bold: ChatCenteredSlashBoldIcon,
  duotone: ChatCenteredSlashDuotoneIcon,
  fill: ChatCenteredSlashFillIcon,
  light: ChatCenteredSlashLightIcon,
  regular: ChatCenteredSlashRegularIcon,
  thin: ChatCenteredSlashThinIcon,
});
