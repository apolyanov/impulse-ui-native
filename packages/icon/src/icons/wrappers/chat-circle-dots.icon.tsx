import { createIcon } from "../../hocs/create-icon.hoc";
import { ChatCircleDotsBoldIcon } from "../bold/chat-circle-dots-bold.icon";
import { ChatCircleDotsDuotoneIcon } from "../duotone/chat-circle-dots-duotone.icon";
import { ChatCircleDotsFillIcon } from "../fill/chat-circle-dots-fill.icon";
import { ChatCircleDotsLightIcon } from "../light/chat-circle-dots-light.icon";
import { ChatCircleDotsRegularIcon } from "../regular/chat-circle-dots-regular.icon";
import { ChatCircleDotsThinIcon } from "../thin/chat-circle-dots-thin.icon";

export const ChatCircleDotsIcon = createIcon("ChatCircleDots", {
  bold: ChatCircleDotsBoldIcon,
  duotone: ChatCircleDotsDuotoneIcon,
  fill: ChatCircleDotsFillIcon,
  light: ChatCircleDotsLightIcon,
  regular: ChatCircleDotsRegularIcon,
  thin: ChatCircleDotsThinIcon,
});
