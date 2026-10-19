import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatCenteredDotsBoldIcon } from "../bold/chat-centered-dots-bold.icon";
import { ChatCenteredDotsDuotoneIcon } from "../duotone/chat-centered-dots-duotone.icon";
import { ChatCenteredDotsFillIcon } from "../fill/chat-centered-dots-fill.icon";
import { ChatCenteredDotsLightIcon } from "../light/chat-centered-dots-light.icon";
import { ChatCenteredDotsRegularIcon } from "../regular/chat-centered-dots-regular.icon";
import { ChatCenteredDotsThinIcon } from "../thin/chat-centered-dots-thin.icon";

export const ChatCenteredDotsIcon = createIcon("ChatCenteredDots", {
  bold: ChatCenteredDotsBoldIcon,
  duotone: ChatCenteredDotsDuotoneIcon,
  fill: ChatCenteredDotsFillIcon,
  light: ChatCenteredDotsLightIcon,
  regular: ChatCenteredDotsRegularIcon,
  thin: ChatCenteredDotsThinIcon,
});
