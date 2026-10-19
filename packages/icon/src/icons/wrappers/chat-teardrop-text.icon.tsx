import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatTeardropTextBoldIcon } from "../bold/chat-teardrop-text-bold.icon";
import { ChatTeardropTextDuotoneIcon } from "../duotone/chat-teardrop-text-duotone.icon";
import { ChatTeardropTextFillIcon } from "../fill/chat-teardrop-text-fill.icon";
import { ChatTeardropTextLightIcon } from "../light/chat-teardrop-text-light.icon";
import { ChatTeardropTextRegularIcon } from "../regular/chat-teardrop-text-regular.icon";
import { ChatTeardropTextThinIcon } from "../thin/chat-teardrop-text-thin.icon";

export const ChatTeardropTextIcon = createIcon("ChatTeardropText", {
  bold: ChatTeardropTextBoldIcon,
  duotone: ChatTeardropTextDuotoneIcon,
  fill: ChatTeardropTextFillIcon,
  light: ChatTeardropTextLightIcon,
  regular: ChatTeardropTextRegularIcon,
  thin: ChatTeardropTextThinIcon,
});
