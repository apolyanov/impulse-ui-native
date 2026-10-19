import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatTeardropDotsBoldIcon } from "../bold/chat-teardrop-dots-bold.icon";
import { ChatTeardropDotsDuotoneIcon } from "../duotone/chat-teardrop-dots-duotone.icon";
import { ChatTeardropDotsFillIcon } from "../fill/chat-teardrop-dots-fill.icon";
import { ChatTeardropDotsLightIcon } from "../light/chat-teardrop-dots-light.icon";
import { ChatTeardropDotsRegularIcon } from "../regular/chat-teardrop-dots-regular.icon";
import { ChatTeardropDotsThinIcon } from "../thin/chat-teardrop-dots-thin.icon";

export const ChatTeardropDotsIcon = createIcon("ChatTeardropDots", {
  bold: ChatTeardropDotsBoldIcon,
  duotone: ChatTeardropDotsDuotoneIcon,
  fill: ChatTeardropDotsFillIcon,
  light: ChatTeardropDotsLightIcon,
  regular: ChatTeardropDotsRegularIcon,
  thin: ChatTeardropDotsThinIcon,
});
