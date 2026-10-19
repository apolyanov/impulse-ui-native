import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatDotsBoldIcon } from "../bold/chat-dots-bold.icon";
import { ChatDotsDuotoneIcon } from "../duotone/chat-dots-duotone.icon";
import { ChatDotsFillIcon } from "../fill/chat-dots-fill.icon";
import { ChatDotsLightIcon } from "../light/chat-dots-light.icon";
import { ChatDotsRegularIcon } from "../regular/chat-dots-regular.icon";
import { ChatDotsThinIcon } from "../thin/chat-dots-thin.icon";

export const ChatDotsIcon = createIcon("ChatDots", {
  bold: ChatDotsBoldIcon,
  duotone: ChatDotsDuotoneIcon,
  fill: ChatDotsFillIcon,
  light: ChatDotsLightIcon,
  regular: ChatDotsRegularIcon,
  thin: ChatDotsThinIcon,
});
