import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatsCircleBoldIcon } from "../bold/chats-circle-bold.icon";
import { ChatsCircleDuotoneIcon } from "../duotone/chats-circle-duotone.icon";
import { ChatsCircleFillIcon } from "../fill/chats-circle-fill.icon";
import { ChatsCircleLightIcon } from "../light/chats-circle-light.icon";
import { ChatsCircleRegularIcon } from "../regular/chats-circle-regular.icon";
import { ChatsCircleThinIcon } from "../thin/chats-circle-thin.icon";

export const ChatsCircleIcon = createIcon("ChatsCircle", {
  bold: ChatsCircleBoldIcon,
  duotone: ChatsCircleDuotoneIcon,
  fill: ChatsCircleFillIcon,
  light: ChatsCircleLightIcon,
  regular: ChatsCircleRegularIcon,
  thin: ChatsCircleThinIcon,
});
