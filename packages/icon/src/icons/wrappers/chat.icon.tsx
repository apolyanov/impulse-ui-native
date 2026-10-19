import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatBoldIcon } from "../bold/chat-bold.icon";
import { ChatDuotoneIcon } from "../duotone/chat-duotone.icon";
import { ChatFillIcon } from "../fill/chat-fill.icon";
import { ChatLightIcon } from "../light/chat-light.icon";
import { ChatRegularIcon } from "../regular/chat-regular.icon";
import { ChatThinIcon } from "../thin/chat-thin.icon";

export const ChatIcon = createIcon("Chat", {
  bold: ChatBoldIcon,
  duotone: ChatDuotoneIcon,
  fill: ChatFillIcon,
  light: ChatLightIcon,
  regular: ChatRegularIcon,
  thin: ChatThinIcon,
});
