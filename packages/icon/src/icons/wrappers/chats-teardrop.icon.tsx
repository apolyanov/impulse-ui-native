import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatsTeardropBoldIcon } from "../bold/chats-teardrop-bold.icon";
import { ChatsTeardropDuotoneIcon } from "../duotone/chats-teardrop-duotone.icon";
import { ChatsTeardropFillIcon } from "../fill/chats-teardrop-fill.icon";
import { ChatsTeardropLightIcon } from "../light/chats-teardrop-light.icon";
import { ChatsTeardropRegularIcon } from "../regular/chats-teardrop-regular.icon";
import { ChatsTeardropThinIcon } from "../thin/chats-teardrop-thin.icon";

export const ChatsTeardropIcon = createIcon("ChatsTeardrop", {
  bold: ChatsTeardropBoldIcon,
  duotone: ChatsTeardropDuotoneIcon,
  fill: ChatsTeardropFillIcon,
  light: ChatsTeardropLightIcon,
  regular: ChatsTeardropRegularIcon,
  thin: ChatsTeardropThinIcon,
});
