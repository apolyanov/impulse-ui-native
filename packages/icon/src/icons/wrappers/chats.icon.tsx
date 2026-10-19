import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatsBoldIcon } from "../bold/chats-bold.icon";
import { ChatsDuotoneIcon } from "../duotone/chats-duotone.icon";
import { ChatsFillIcon } from "../fill/chats-fill.icon";
import { ChatsLightIcon } from "../light/chats-light.icon";
import { ChatsRegularIcon } from "../regular/chats-regular.icon";
import { ChatsThinIcon } from "../thin/chats-thin.icon";

export const ChatsIcon = createIcon("Chats", {
  bold: ChatsBoldIcon,
  duotone: ChatsDuotoneIcon,
  fill: ChatsFillIcon,
  light: ChatsLightIcon,
  regular: ChatsRegularIcon,
  thin: ChatsThinIcon,
});
