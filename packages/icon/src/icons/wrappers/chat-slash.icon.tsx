import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatSlashBoldIcon } from "../bold/chat-slash-bold.icon";
import { ChatSlashDuotoneIcon } from "../duotone/chat-slash-duotone.icon";
import { ChatSlashFillIcon } from "../fill/chat-slash-fill.icon";
import { ChatSlashLightIcon } from "../light/chat-slash-light.icon";
import { ChatSlashRegularIcon } from "../regular/chat-slash-regular.icon";
import { ChatSlashThinIcon } from "../thin/chat-slash-thin.icon";

export const ChatSlashIcon = createIcon("ChatSlash", {
  bold: ChatSlashBoldIcon,
  duotone: ChatSlashDuotoneIcon,
  fill: ChatSlashFillIcon,
  light: ChatSlashLightIcon,
  regular: ChatSlashRegularIcon,
  thin: ChatSlashThinIcon,
});
