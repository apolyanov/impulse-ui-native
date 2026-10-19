import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatCircleBoldIcon } from "../bold/chat-circle-bold.icon";
import { ChatCircleDuotoneIcon } from "../duotone/chat-circle-duotone.icon";
import { ChatCircleFillIcon } from "../fill/chat-circle-fill.icon";
import { ChatCircleLightIcon } from "../light/chat-circle-light.icon";
import { ChatCircleRegularIcon } from "../regular/chat-circle-regular.icon";
import { ChatCircleThinIcon } from "../thin/chat-circle-thin.icon";

export const ChatCircleIcon = createIcon("ChatCircle", {
  bold: ChatCircleBoldIcon,
  duotone: ChatCircleDuotoneIcon,
  fill: ChatCircleFillIcon,
  light: ChatCircleLightIcon,
  regular: ChatCircleRegularIcon,
  thin: ChatCircleThinIcon,
});
