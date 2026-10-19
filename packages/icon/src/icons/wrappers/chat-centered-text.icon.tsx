import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatCenteredTextBoldIcon } from "../bold/chat-centered-text-bold.icon";
import { ChatCenteredTextDuotoneIcon } from "../duotone/chat-centered-text-duotone.icon";
import { ChatCenteredTextFillIcon } from "../fill/chat-centered-text-fill.icon";
import { ChatCenteredTextLightIcon } from "../light/chat-centered-text-light.icon";
import { ChatCenteredTextRegularIcon } from "../regular/chat-centered-text-regular.icon";
import { ChatCenteredTextThinIcon } from "../thin/chat-centered-text-thin.icon";

export const ChatCenteredTextIcon = createIcon("ChatCenteredText", {
  bold: ChatCenteredTextBoldIcon,
  duotone: ChatCenteredTextDuotoneIcon,
  fill: ChatCenteredTextFillIcon,
  light: ChatCenteredTextLightIcon,
  regular: ChatCenteredTextRegularIcon,
  thin: ChatCenteredTextThinIcon,
});
