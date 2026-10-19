import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatCenteredBoldIcon } from "../bold/chat-centered-bold.icon";
import { ChatCenteredDuotoneIcon } from "../duotone/chat-centered-duotone.icon";
import { ChatCenteredFillIcon } from "../fill/chat-centered-fill.icon";
import { ChatCenteredLightIcon } from "../light/chat-centered-light.icon";
import { ChatCenteredRegularIcon } from "../regular/chat-centered-regular.icon";
import { ChatCenteredThinIcon } from "../thin/chat-centered-thin.icon";

export const ChatCenteredIcon = createIcon("ChatCentered", {
  bold: ChatCenteredBoldIcon,
  duotone: ChatCenteredDuotoneIcon,
  fill: ChatCenteredFillIcon,
  light: ChatCenteredLightIcon,
  regular: ChatCenteredRegularIcon,
  thin: ChatCenteredThinIcon,
});
