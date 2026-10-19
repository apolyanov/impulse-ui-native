import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatCircleTextBoldIcon } from "../bold/chat-circle-text-bold.icon";
import { ChatCircleTextDuotoneIcon } from "../duotone/chat-circle-text-duotone.icon";
import { ChatCircleTextFillIcon } from "../fill/chat-circle-text-fill.icon";
import { ChatCircleTextLightIcon } from "../light/chat-circle-text-light.icon";
import { ChatCircleTextRegularIcon } from "../regular/chat-circle-text-regular.icon";
import { ChatCircleTextThinIcon } from "../thin/chat-circle-text-thin.icon";

export const ChatCircleTextIcon = createIcon("ChatCircleText", {
  bold: ChatCircleTextBoldIcon,
  duotone: ChatCircleTextDuotoneIcon,
  fill: ChatCircleTextFillIcon,
  light: ChatCircleTextLightIcon,
  regular: ChatCircleTextRegularIcon,
  thin: ChatCircleTextThinIcon,
});
