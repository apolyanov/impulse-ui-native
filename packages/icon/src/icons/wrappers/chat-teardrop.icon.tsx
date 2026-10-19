import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatTeardropBoldIcon } from "../bold/chat-teardrop-bold.icon";
import { ChatTeardropDuotoneIcon } from "../duotone/chat-teardrop-duotone.icon";
import { ChatTeardropFillIcon } from "../fill/chat-teardrop-fill.icon";
import { ChatTeardropLightIcon } from "../light/chat-teardrop-light.icon";
import { ChatTeardropRegularIcon } from "../regular/chat-teardrop-regular.icon";
import { ChatTeardropThinIcon } from "../thin/chat-teardrop-thin.icon";

export const ChatTeardropIcon = createIcon("ChatTeardrop", {
  bold: ChatTeardropBoldIcon,
  duotone: ChatTeardropDuotoneIcon,
  fill: ChatTeardropFillIcon,
  light: ChatTeardropLightIcon,
  regular: ChatTeardropRegularIcon,
  thin: ChatTeardropThinIcon,
});
