import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatTextBoldIcon } from "../bold/chat-text-bold.icon";
import { ChatTextDuotoneIcon } from "../duotone/chat-text-duotone.icon";
import { ChatTextFillIcon } from "../fill/chat-text-fill.icon";
import { ChatTextLightIcon } from "../light/chat-text-light.icon";
import { ChatTextRegularIcon } from "../regular/chat-text-regular.icon";
import { ChatTextThinIcon } from "../thin/chat-text-thin.icon";

export const ChatTextIcon = createIcon("ChatText", {
  bold: ChatTextBoldIcon,
  duotone: ChatTextDuotoneIcon,
  fill: ChatTextFillIcon,
  light: ChatTextLightIcon,
  regular: ChatTextRegularIcon,
  thin: ChatTextThinIcon,
});
