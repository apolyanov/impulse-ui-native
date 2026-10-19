import { createIcon } from "../../hocs/create-icon.hoc";
import { FlowerTulipBoldIcon } from "../bold/flower-tulip-bold.icon";
import { FlowerTulipDuotoneIcon } from "../duotone/flower-tulip-duotone.icon";
import { FlowerTulipFillIcon } from "../fill/flower-tulip-fill.icon";
import { FlowerTulipLightIcon } from "../light/flower-tulip-light.icon";
import { FlowerTulipRegularIcon } from "../regular/flower-tulip-regular.icon";
import { FlowerTulipThinIcon } from "../thin/flower-tulip-thin.icon";

export const FlowerTulipIcon = createIcon("FlowerTulip", {
  bold: FlowerTulipBoldIcon,
  duotone: FlowerTulipDuotoneIcon,
  fill: FlowerTulipFillIcon,
  light: FlowerTulipLightIcon,
  regular: FlowerTulipRegularIcon,
  thin: FlowerTulipThinIcon,
});
