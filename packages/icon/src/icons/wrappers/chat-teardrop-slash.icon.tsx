import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatTeardropSlashBoldIcon } from "../bold/chat-teardrop-slash-bold.icon";
import { ChatTeardropSlashDuotoneIcon } from "../duotone/chat-teardrop-slash-duotone.icon";
import { ChatTeardropSlashFillIcon } from "../fill/chat-teardrop-slash-fill.icon";
import { ChatTeardropSlashLightIcon } from "../light/chat-teardrop-slash-light.icon";
import { ChatTeardropSlashRegularIcon } from "../regular/chat-teardrop-slash-regular.icon";
import { ChatTeardropSlashThinIcon } from "../thin/chat-teardrop-slash-thin.icon";

export const ChatTeardropSlashIcon = createIcon("ChatTeardropSlash", {
  bold: ChatTeardropSlashBoldIcon,
  duotone: ChatTeardropSlashDuotoneIcon,
  fill: ChatTeardropSlashFillIcon,
  light: ChatTeardropSlashLightIcon,
  regular: ChatTeardropSlashRegularIcon,
  thin: ChatTeardropSlashThinIcon,
});
